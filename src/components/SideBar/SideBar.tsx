import React, { FC, useEffect, useState } from "react";
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
import Auth from "../../store/auth";

import { Item, List, Logo } from "./styled";
import { URL } from "../../constants/API";

const icons: Record<string, JSX.Element> = {
  "929b2633-4a39-42a1-8d98-05b93a1e709c": <MathIcon />,
  "9896d837-f828-4400-977c-c1bcd1e5dd34": <RussianIcon />,
  "f7fe95eb-c8ec-46f4-96ed-4c42c0f7a726": <ArtIcon />,
  "df7bf495-f57a-45ca-b427-113713d99559": <PhysicIcon />,
  informatics: <InformaticsIcon />,
  "5c2159c2-993e-4a3f-80b7-14abd1f29f91": <LiteratureIcon />,
};

const SideBar: FC = observer(() => {
  const [themes, setThemes] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${URL}/themes/`, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setThemes(res.data);
      });
  }, []);

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
