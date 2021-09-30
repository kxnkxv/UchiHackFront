import {FC} from 'react';
import {Route, Switch,} from "react-router-dom";
import {ALL_QUESTIONS, ALL_THEMES, AUTH, NEW_QUESTION, PROFILE, QUESTION, REGISTRATION} from "../constants/routes";
import AllQuestions from '../pages/AllQuestions/AllQuestions';
import AllThemeQuestions from '../pages/AllThemeQuestions/AllThemeQuestions';
import AllThemes from '../pages/AllThemes/AllThemes';
import NewQuestion from '../pages/new/NewQuestion';
import UserProfile from '../pages/profile/UserProfile';
import Question from '../pages/question/Question';
import Registration from '../pages/registration/Registration';
import Authorization from "./../pages/authorization/Authorization"

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <p>Лендинг</p>
      </Route>
      <Route exact path={AUTH}>
        <Authorization/>
      </Route>
      <Route exact path={REGISTRATION}>
        <Registration/>
      </Route>
      <Route exact path={NEW_QUESTION}>
        <NewQuestion/>
      </Route>
      <Route exact path={PROFILE}>
        <UserProfile/>
      </Route>
      <Route exact path={QUESTION}>
        <Question/>
      </Route>
      <Route exact path={ALL_QUESTIONS}>
        <AllQuestions/>
      </Route>
      <Route exact path={ALL_THEMES}>
        <AllThemes/>
      </Route>
      <Route exact path="/allmath">
        {/* @ts-ignore */}
        <AllThemeQuestions theme="math"/>
      </Route>
    </Switch>
  );
};

export default Routes;