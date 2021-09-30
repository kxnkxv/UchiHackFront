import {FC} from 'react';
import {Route, Switch,} from "react-router-dom";
import {ALL_QUESTIONS, AUTH, NEW_QUESTION, PROFILE, QUESTION, REGISTRATION} from "../constants/routes";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <p>Лендинг</p>
      </Route>
      <Route exact path={AUTH}>
        <p>Авторизация</p>
      </Route>
      <Route exact path={REGISTRATION}>
        <p>Регистрация</p>
      </Route>
      <Route exact path={NEW_QUESTION}>
        <p>Новый вопрос</p>
      </Route>
      <Route exact path={PROFILE}>
        <p>Профиль пользователя</p>
      </Route>
      <Route exact path={QUESTION}>
        <p>Конкретный вопрос</p>
      </Route>
      <Route exact path={ALL_QUESTIONS}>
        <p>Все вопросы</p>
      </Route>
    </Switch>
  );
};

export default Routes;