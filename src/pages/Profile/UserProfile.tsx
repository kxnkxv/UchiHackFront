import React from "react";

import User from "./../../store/user/user";
import PublicProfile from "./PublicProfile/PublicProfile";
import MyProfile from "./MyProfile/MyProfile";

// @ts-ignore
const UserProfile: FC = ({ match }) => {
  const { userId } = match.params;
  if (userId === User.user.id) {
    return <MyProfile />;
  } else {
    return <PublicProfile userId={userId} />;
  }
};

export default UserProfile;
