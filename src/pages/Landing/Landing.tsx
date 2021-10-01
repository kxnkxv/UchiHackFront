import React from "react";
import { I18nextProvider } from "react-i18next";
import Router from "./router";
import i18n from "./translation";

const Landing = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  );
};

export default Landing;
