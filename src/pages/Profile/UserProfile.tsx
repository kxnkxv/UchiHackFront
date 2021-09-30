import React from 'react';
import Auth from "../../store/auth";

const UserProfile = () => {
  return (
    <div>
      UserProfile
      <button onClick={() => Auth.setIsUserAuth(false)}>выйти</button>
    </div>
  );
};

export default UserProfile;