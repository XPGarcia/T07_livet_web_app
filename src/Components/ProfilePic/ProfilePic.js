import React from "react";
import { getUserField } from "../../Store/auth";

import styles from "./ProfilePic.module.css";

function ProfilePic() {
  // eslint-disable-next-line global-require
  const pic = require("../../Assets/profile-pic.png");
  const name = getUserField("name");

  return (
    <div className={styles["profile-info"]}>
      <div className={styles["profilo-info__pic-container"]}>
        <img
          className={styles["profile-info__pic"]}
          src={pic}
          alt="profile_pic"
        />
      </div>
      <p className={styles["profile-info__name"]}>{name}</p>
    </div>
  );
}

export default ProfilePic;
