import {FC} from 'react';
import {Redirect, Route, Switch,} from "react-router-dom";
import {QUESTION, ALL_THEMES, NEW_QUESTION, PROFILE} from "../constants/routes";
import Themes from '../pages/Themes/Themes';
import NewQuestion from '../pages/new/NewQuestion';
import UserProfile from '../pages/profile/UserProfile';
import Question from '../pages/question/Question';
import CustomLayout from "../components/CustomLayout/CustomLayout";

const PrivateRoutes: FC = () => {
  return (
    <CustomLayout>
      <Switch>
        <Route exact path='/' component={Themes}/>
        <Route exact path={NEW_QUESTION} component={NewQuestion}/>
        <Route exact path={`${PROFILE}/:userId`} component={UserProfile}/>
        <Route exact path={`${QUESTION}/:questionId`} component={Question} />
        <Route exact path={`${ALL_THEMES}/:themeId`} component={Themes} />
        <Redirect to='/' />
      </Switch>
    </CustomLayout>

  );
};

export default PrivateRoutes;