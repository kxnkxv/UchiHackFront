import {FC} from 'react';
import {Avatar, Button, Col, Image, Row} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import User from "../../store/user/user";
import {observer} from "mobx-react-lite";
import {Link} from 'react-router-dom';
import {AUTH, NEW_QUESTION, PROFILE, REGISTRATION} from "../../constants/routes";
import Complete from '../Complete/Complete';
import logo from "./../../img/logo.png"

const HeaderNav: FC = observer(() => {
    return (
      <>
        <Row
          gutter={[25, 25]}
          align="middle"
          justify={"space-between"}
          style={{
            padding: 0,
            margin: 0,
            paddingTop: 5
          }}
        >
          <Col
            style={{
              paddingLeft: 0,
              marginLeft: 0
            }}
          >
            <Row
              gutter={[25, 25]}
              align="middle"
              style={{
                padding: 0,
                margin: 0
              }}
            >
              <Col>
                <Link to="/">
                  <Image src={logo} height={50} width={50} preview={false}/>
                </Link>
              </Col>
              <Col>
                <Complete/>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row
              gutter={[25, 25]}
              align="middle"
              style={{
                padding: 0,
                margin: 0
              }}
            >
              <Col>
                <Link to={NEW_QUESTION}>
                  <Button>Задать вопрос</Button>
                </Link>
              </Col>
              <Col>
                {
                  User
                    ? <Link to={`${PROFILE}/${User.user.id}`}>
                      {
                        User.user.avatar
                          ? <Avatar src={User.user.avatar}/>
                          : <Avatar icon={<UserOutlined/>}/>
                      }

                    </Link>
                    : <>
                      <Link to={AUTH}>
                        <Button>
                          Авторизация
                        </Button>
                      </Link>
                      <Link to={REGISTRATION}>
                        <Button>
                          Регистрация
                        </Button>
                      </Link>
                    </>
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
)

export default HeaderNav;