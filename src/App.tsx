import { FC, useEffect } from "react";
import Routes from "./router/Routes";
import moment from "moment";
import "moment/locale/ru";

const App: FC = () => {
  useEffect(() => {
    moment.locale("ru");
  }, []);
  return <Routes />;
};

export default App;
