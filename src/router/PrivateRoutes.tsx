import {FC} from 'react';
import {Redirect, Route, Switch,} from "react-router-dom";
import {ALL_QUESTIONS, ALL_THEMES, NEW_QUESTION, PROFILE} from "../constants/routes";
import AllQuestions from '../pages/AllQuestions/AllQuestions';
import AllThemes from '../pages/AllThemes/AllThemes';
import NewQuestion from '../pages/new/NewQuestion';
import UserProfile from '../pages/profile/UserProfile';
import Question from '../pages/question/Question';
import Theme from "../pages/theme/Theme";
import CustomLayout from "../components/CustomLayout/CustomLayout";
import Auth from "../store/auth";

const PrivateRoutes: FC = () => {
  return (
    <CustomLayout>
      <Switch>
        <Route path='/'>
          <button onClick={() => Auth.setIsUserAuth(false)}>выйти</button>
        </Route>
        <Route exact path={NEW_QUESTION} component={NewQuestion}/>
        <Route exact path={`${PROFILE}/:userId`} component={UserProfile}/>
        <Route exact path={ALL_QUESTIONS} component={AllQuestions}/>
        <Route exact path={`${ALL_QUESTIONS}/:questionId`} component={Question} />
        <Route exact path={ALL_THEMES} component={AllThemes} />
        <Route exact path={`${ALL_THEMES}/:themeId`} component={Theme} />
        <Redirect to='/' />
      </Switch>
    </CustomLayout>

  );
};

export default PrivateRoutes;