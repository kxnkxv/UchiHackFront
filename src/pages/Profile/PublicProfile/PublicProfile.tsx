import { Card } from "antd";
import React, { FC } from "react";

interface PublicProfileProps {
  userId: any;
}

const PublicProfile: FC<PublicProfileProps> = ({ userId }) => {
  return <Card>{userId}</Card>;
};

export default PublicProfile;
