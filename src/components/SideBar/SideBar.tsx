import {FC, SetStateAction, useState} from 'react';
import {Menu} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {observer} from "mobx-react-lite";
import {Link} from 'react-router-dom';
import {ALL_QUESTIONS, ALL_THEMES, AUTH} from "../../constants/routes";
import {questionsThemes} from "../../constants/questionsThemes";

const {SubMenu} = Menu;

const SideBar: FC = observer(() => {
    const [current, setCurrent] = useState("AUTH")

    const handleClick = (event: { key: SetStateAction<string>; }) => {
      setCurrent(event.key)
    }

    return (
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="vertical"
        style={{
          width: "auto"
        }}
      >
        <Menu.Item key={ALL_QUESTIONS} icon={<AppstoreOutlined/>}>
          Все вопросы
          <Link to={ALL_QUESTIONS}/>
        </Menu.Item>
        {
          Object.keys(questionsThemes).map((key) => (
            <Menu.Item key={key}>
              {questionsThemes[key]}
              <Link to={`${ALL_THEMES}/${key}`}/>
            </Menu.Item>
          ))
        }
      </Menu>
    );
  }
)

export default SideBar;