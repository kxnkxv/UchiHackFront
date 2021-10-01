import { Card } from "antd";
import React, { FC, useState } from "react";
import Settings from "../Settings/Settings";
import PersonalPage from "./PersonalPage/PersonalPage";

const tabList = [
  {
    key: "profile",
    tab: "profile",
  },
  {
    key: "settings",
    tab: "settings",
  },
];

const contentList = {
  profile: <PersonalPage />,
  settings: <Settings />,
};

const MyProfile: FC = () => {
  const [current, setCurrent] = useState("profile");

  const onTabChange = (key: React.SetStateAction<string>) => {
    setCurrent(key);
  };

  return (
    <Card
      style={{ width: "100%" }}
      tabList={tabList}
      activeTabKey={current}
      onTabChange={(key) => {
        onTabChange(key);
      }}
    >
      {/*@ts-ignore*/}
      {contentList[current]}
    </Card>
  );
};

export default MyProfile;
