import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { sessionService } from 'redux-react-session';
import UserPool from './UserPool';

function checkTimeout(refreshDate) {
  const hours = 3;
  const now = (new Date()).getTime();
  // session timeout
  return (now - refreshDate > hours * 60 * 60 * 1000);
}

function checkSession() {
  sessionService.loadSession()
    .then(session => {
      const timeout = checkTimeout(session['refreshDate']);
      if (timeout) {
        sessionService.deleteSession();
      } else {
        sessionService.saveSession({
          ...session,
          refreshDate: (new Date()).getTime()
        });
      }
    })
    .catch(err => {
      console.log("Error while loading session");
    });
}

function authenticate(user, authDetails) {
  return new Promise((resolve, reject) => {
    user.authenticateUser(authDetails, {
      onSuccess: async (data) => {
        const accessToken = data.getAccessToken().getJwtToken();
        const params = data.getIdToken().decodePayload();
        await sessionService.saveSession({
          refreshDate: (new Date()).getTime(),
          token: accessToken,
          name: params['name'],
          role: params['cognito:groups'][0]
        });
        resolve(true);
      },
      onFailure: (err) => {
        reject(err);
      }
    });
  });
}

function login(email, password) {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    authenticate(user, authDetails)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

function logout() {
  return new Promise(async (resolve, reject) => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      await sessionService.deleteSession();
      resolve(true);
    }
    reject(false);
  });
}

export { checkSession, checkTimeout, login, logout }