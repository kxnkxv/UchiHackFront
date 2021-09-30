import {FC} from 'react';
import {Route, Switch,} from "react-router-dom";
import {ALL_QUESTIONS, ALL_THEMES, AUTH, NEW_QUESTION, PROFILE, REGISTRATION} from "../constants/routes";
import AllQuestions from '../pages/AllQuestions/AllQuestions';
import AllThemeQuestions from '../pages/AllThemeQuestions/AllThemeQuestions';
import AllThemes from '../pages/AllThemes/AllThemes';
import NewQuestion from '../pages/new/NewQuestion';
import UserProfile from '../pages/profile/UserProfile';
import Question from '../pages/question/Question';
import Registration from '../pages/registration/Registration';
import Authorization from "./../pages/authorization/Authorization"
import Theme from "../pages/theme/Theme";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <p>Лендинг</p>
      </Route>
      <Route exact path={AUTH} component={Authorization} />
      <Route exact path={REGISTRATION} component={Registration} />
      <Route exact path={NEW_QUESTION} component={NewQuestion} />
      <Route exact path={PROFILE} component={UserProfile} />
      <Route exact path={ALL_QUESTIONS} component={AllQuestions} />
      <Route exact path={`${ALL_QUESTIONS}/:questionId`} component={Question} />
      <Route exact path={ALL_THEMES} component={AllThemes} />
      <Route exact path={`${ALL_THEMES}/:themeId`} component={Theme} />
      <Route exact path="/allmath">
        {/* @ts-ignore */}
        <AllThemeQuestions theme="math"/>
      </Route>
    </Switch>
  );
};

export default Routes;