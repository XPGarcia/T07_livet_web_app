import React from 'react';

import styles from  './ProfilePic.module.css';

function ProfilePic(props) {
  const pic = require('../../Assets/profile-pic.png');

  return (
    <div className={styles['profile-info']}>
      <div className={styles['profilo-info__pic-container']}>
        <img className={styles['profile-info__pic']} src={pic} alt='profile_pic' />
      </div>
      <p className={styles['profile-info__name']}>{props.name}</p>
    </div>
  );
}

export default ProfilePic;