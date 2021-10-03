import React, { FC, SetStateAction, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { THEMES } from "../../constants/routes";
import { questionsThemes } from "../../constants/questionsThemes";
import { ReactComponent as MathIcon } from "../../icons/math.svg";
import { ReactComponent as InformaticsIcon } from "../../icons/informatics.svg";
import { ReactComponent as RussianIcon } from "../../icons/russian.svg";
import { ReactComponent as AllIcon } from "../../icons/all.svg";
import { ReactComponent as ArtIcon } from "../../icons/art.svg";
import { ReactComponent as PhysicIcon } from "../../icons/physic.svg";
import { ReactComponent as LiteratureIcon } from "../../icons/literature.svg";
import logo from "../../img/logo.png";

import { List, Item, Logo } from "./styled";

const icons: Record<string, JSX.Element> = {
  math: <MathIcon />,
  russian: <RussianIcon />,
  art: <ArtIcon />,
  physic: <PhysicIcon />,
  informatics: <InformaticsIcon />,
  literature: <LiteratureIcon />,
};

const SideBar: FC = observer(() => {
  const [current, setCurrent] = useState("/");

  const handleClick = (key: string) => () => {
    setCurrent(key);
  };

  return (
    <List>
      <Logo>
        <Link onClick={handleClick("/")} to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>

      <Item active={current === "/"}>
        <Link onClick={handleClick("/")} to="/">
          <AllIcon />
          Все предметы
        </Link>
      </Item>
      {Object.keys(questionsThemes)
        .slice(0, 5)
        .map((key) => (
          <Item active={current === key} key={key}>
            <Link onClick={handleClick(key)} to={`${THEMES}/${key}`}>
              {icons[key]}
              {questionsThemes[key]}
            </Link>
          </Item>
        ))}
      <Item>
        <Link to={`${THEMES}/allThemes`}>
          <AllIcon />
          Все предметы
        </Link>
      </Item>
    </List>
  );
});

export default SideBar;
