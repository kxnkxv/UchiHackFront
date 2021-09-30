import {FC} from 'react';
import {Row} from "antd"

const RowWrap: FC = ({children, ...props}) => {
  return (
    <Row
      gutter={[25, 25]}
      justify="space-around"
      align="middle"
      {...props}
    >
      {children}
    </Row>
  );
};

export default RowWrap;