import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
import { AUTH, REGISTRATION, RESTORE_PASSWORD } from "../constants/routes";
import Auth from "../store/auth";
import User from "../store/user";
import Registration from "../pages/Registration/Registration";
import Authorization from "../pages/Authorization/Authorization";
import PrivateRoutes from "./PrivateRoutes";
import RestorePassword from "../pages/RestorePassword/RestorePassword";
import Landing from "../pages/Landing/Landing";

const Routes: FC = () => {
  return Auth.isUserAuth && User.user ? (
    <PrivateRoutes />
  ) : (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path={RESTORE_PASSWORD} component={RestorePassword} />
      <Route exact path={AUTH} component={Authorization} />
      <Route exact path={REGISTRATION} component={Registration} />

      <Redirect to={AUTH} />
    </Switch>
  );
};

export default observer(Routes);
