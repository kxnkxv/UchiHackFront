import React, { FC, useState } from "react";
import Call from "../Call";
import { Button } from "antd";

interface OwnProps {
  back: () => void;
  data: any;
}

const Dialog: FC<OwnProps> = ({ back, data }) => {
  const [isOpenCall, setIsOpenCall] = useState(false);
  const setIsOpenCallHandler = () => setIsOpenCall(!isOpenCall);
  return (
    <div>
      {isOpenCall && <Call close={setIsOpenCallHandler} />}

      <Button onClick={back}>back</Button>
      {data}
      <Button onClick={setIsOpenCallHandler}>звонок</Button>
    </div>
  );
};

export default Dialog;
