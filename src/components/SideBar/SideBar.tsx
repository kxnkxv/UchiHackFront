import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { THEMES } from "../../constants/routes";
import { ReactComponent as MathIcon } from "../../icons/math.svg";
import { ReactComponent as InformaticsIcon } from "../../icons/informatics.svg";
import { ReactComponent as RussianIcon } from "../../icons/russian.svg";
import { ReactComponent as AllIcon } from "../../icons/all.svg";
import { ReactComponent as ArtIcon } from "../../icons/art.svg";
import { ReactComponent as PhysicIcon } from "../../icons/physic.svg";
import { ReactComponent as LiteratureIcon } from "../../icons/literature.svg";
import logo from "../../img/logo.png";

import { Item, List, Logo } from "./styled";
import { themes } from "../../constants/themes";

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
      {themes.slice(0, 5).map((theme: { id: string; title: string }) => (
        <Item active={current === theme.id} key={theme.id}>
          <Link onClick={handleClick(theme.id)} to={`${THEMES}/${theme.id}`}>
            {icons[theme.id]}
            {theme.title}
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
