import React, {FC} from 'react';
import {RouteComponentProps} from "react-router-dom";

interface RouteParams {
  themeId: string;
}

const Theme: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const {themeId} = match.params;
  return (
    <div>
      {themeId}
    </div>
  );
};

export default Theme;