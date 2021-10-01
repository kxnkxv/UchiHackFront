import {FC, SetStateAction, useState} from 'react';
import {Menu} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {observer} from "mobx-react-lite";
import {Link} from 'react-router-dom';
import {ALL_THEMES} from "../../constants/routes";
import {questionsThemes} from "../../constants/questionsThemes";

const SideBar: FC = observer(() => {
    const [current, setCurrent] = useState("/")

    const handleClick = (event: { key: SetStateAction<string>; }) => {
      setCurrent(event.key)
    }

    return (
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="vertical"
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Menu.Item key="/" icon={<AppstoreOutlined/>}>
          Все вопросы
          <Link to="/"/>
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