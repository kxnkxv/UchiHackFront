import { Col, Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  RightBlockContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { AUTH, REGISTRATION } from "../../../../../constants/routes";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    if (item.title === "Регистрация") {
                      return (
                        <Link to={REGISTRATION}>
                          <Button key={id} color={item.color} fixedWidth={true}>
                            {t(item.title)}
                          </Button>
                        </Link>
                      );
                    } else if (item.title === "Авторизация") {
                      return (
                        <Link to={AUTH}>
                          <Button key={id} color={item.color} fixedWidth={true}>
                            {t(item.title)}
                          </Button>
                        </Link>
                      );
                    } else {
                      return (
                        <Button key={id} color={item.color} fixedWidth={true}>
                          {t(item.title)}
                        </Button>
                      );
                    }
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
