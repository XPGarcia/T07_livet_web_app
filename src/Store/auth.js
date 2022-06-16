import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { sessionService } from "redux-react-session";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import UserPool from "./UserPool";

function parseToken() {
  const session = JSON.parse(
    localStorage.getItem("redux-react-session/USER-SESSION")
  );
  let token;
  try {
    token = jwt_decode(session.token);
  } catch (e) {
    console.log(e);
  }
  return token;
}

const hasRole = (role) => {
  const token = parseToken();
  const roles = token["cognito:groups"];
  return roles.includes(role);
};

const getUserField = (field) => parseToken()[field];

function checkTimeout(refreshDate) {
  const hours = 12;
  const now = new Date().getTime();
  // session timeout
  return now - refreshDate > hours * 60 * 60 * 1000;
}

function checkSession() {
  sessionService
    .loadSession()
    .then((session) => {
      const timeout = checkTimeout(session.refreshDate);
      if (timeout) {
        sessionService.deleteSession();
      } else {
        sessionService.saveSession({
          ...session,
          refreshDate: new Date().getTime()
        });
      }
    })
    .catch(() => {
      console.log("Error while loading session");
    });
}

function authenticate(user, authDetails) {
  return new Promise((resolve, reject) => {
    user.authenticateUser(authDetails, {
      onSuccess: async (data) => {
        const accessToken = data.getIdToken().getJwtToken();
        await sessionService.saveSession({
          refreshDate: new Date().getTime(),
          token: accessToken
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
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      sessionService.deleteSession().then(resolve(true));
    }
    reject(Error("User not found"));
  });
}

export { checkSession, checkTimeout, login, logout, hasRole, getUserField };
