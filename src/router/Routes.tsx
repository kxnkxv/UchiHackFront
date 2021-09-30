import {FC} from 'react';
import {Redirect, Route, Switch,} from "react-router-dom";
import {observer} from "mobx-react";
import {AUTH, REGISTRATION} from "../constants/routes";
import Auth from '../store/auth'
import Registration from "../pages/Registration/Registration"
import Authorization from "../pages/Authorization/Authorization"
import PrivateRoutes from "./PrivateRoutes";

const Routes: FC = () => {

  return Auth.isUserAuth ? <PrivateRoutes/> : (
    <Switch>
      <Route exact path="/">
        <p>Лендинг</p>
        <button onClick={() => Auth.setIsUserAuth(true)}>войти</button>
      </Route>
      <Route exact path={AUTH} component={Authorization}/>
      <Route exact path={REGISTRATION} component={Registration}/>
      <Redirect to={AUTH}/>
    </Switch>
  );
};

export default observer(Routes);
