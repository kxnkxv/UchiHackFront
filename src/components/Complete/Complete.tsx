import React, { useState } from "react";
import { Search } from "./styled";
import axios from "axios";
import { URL } from "../../constants/API";
import Auth from "../../store/auth";
import { removeDuplicates } from "../../utils/removeDuplicates";
import { SuggQuestionType } from "../../pages/NewQuestion/NewQuestion";
import { Card, Typography } from "antd";
import { QuestionType } from "../../types/QuestionType";
import ThemeItem from "../../pages/Themes/components/ThemeItem/ThemeItem";

const Complete: React.FC = () => {
  const [similar, setSimilar] = useState<any[]>([]);
  const temp: any[] = [];
  const getSimilar = (e: any) => {
    if (e.target.value != "") {
      axios
        .request<SuggQuestionType>({
          method: "get",
          url: `${URL}/questions/search?q=${e.target.value}`,
          headers: {
            Authorization: `Bearer ${Auth.token.accessToken}`,
          },
        })
        .then((response) => {
          temp.push(response.data.data);
        });
      setSimilar(removeDuplicates(temp));
    }
  };
  return (
    <>
      <Search
        placeholder="Найти ответ на любой вопрос"
        onChange={getSimilar}
        enterButton
      />
      {similar.length != 0 ? (
        <Card>
          <Typography.Title>Похожие вопросы</Typography.Title>
          <div>
            {similar.map((question: QuestionType) => (
              <ThemeItem question={question} />
            ))}
          </div>
        </Card>
      ) : null}
    </>
  );
};

export default Complete;
