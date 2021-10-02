import React, {FC, useState} from 'react';
import Call from "../Call";

interface OwnProps{
  back: () => void;
  data: any;
}

const Dialog: FC<OwnProps> = ({back, data}) => {
  const [isOpenCall, setIsOpenCall] = useState(false);
  const setIsOpenCallHandler = () => setIsOpenCall(!isOpenCall);
  return (
    <div>
      {isOpenCall && <Call close={setIsOpenCallHandler} />}
      <button onClick={setIsOpenCallHandler}>звонок</button>
      <button onClick={back}>back</button>
      {data}
    </div>
  );
};

export default Dialog;
