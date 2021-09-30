import {FC, SetStateAction, useState} from 'react';
import {Avatar, Menu} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import User from "../../store/user/user";
import {observer} from "mobx-react-lite";
import {Link} from 'react-router-dom';
import {ALL_QUESTIONS, AUTH, NEW_QUESTION, QUESTION, REGISTRATION} from "../../constants/routes";

const {SubMenu} = Menu;

const HeaderNav: FC = observer(() => {
    const [current, setCurrent] = useState("AUTH")

    const handleClick = (event: { key: SetStateAction<string>; }) => {
      setCurrent(event.key)
    }

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="NEW_QUESTION" icon={<AppstoreOutlined/>}>
          Задать вопрос
          <Link to={NEW_QUESTION}/>
        </Menu.Item>
        <Menu.Item key="QUESTION" icon={<AppstoreOutlined/>}>
          Конкретный вопрос
          <Link to={QUESTION}/>
        </Menu.Item>
        <SubMenu key="ALL_QUESTIONS" icon={<SettingOutlined/>} title="Все вопросы">
          <Menu.Item key="all">
            Все вопросы
            <Link to={ALL_QUESTIONS}/>
          </Menu.Item>
          <Menu.Item key="math">
            math
            <Link to="/allmath"/>
          </Menu.Item>
          <Menu.Item key="russian">
            russian
          </Menu.Item>
          <Menu.Item key="art">
            art
          </Menu.Item>
          <Menu.Item key="physic">
            physic
          </Menu.Item>
          <Menu.Item key="physic">
            Все теги
            <Link to="/tags"/>
          </Menu.Item>
        </SubMenu>
        {
          User
            ? <Menu.Item key="PROFILE">
              {
                User.user.avatar
                  ? <Avatar src={User.user.avatar}/>
                  : <Avatar icon={<UserOutlined/>}/>
              }
            </Menu.Item>
            : <>
              <Menu.Item key="AUTH" icon={<MailOutlined/>}>
                Авторизация
                <Link to={AUTH}/>
              </Menu.Item>
              <Menu.Item key="REGISTRATION" icon={<AppstoreOutlined/>}>
                Регистрация
                <Link to={REGISTRATION}/>
              </Menu.Item>
            </>
        }
      </Menu>
    );
  }
)

export default HeaderNav;