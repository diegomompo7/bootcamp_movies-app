import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <div>
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}>{" "}</Route>
              <Route path="/movie/:detailId" element={<DetailPage></DetailPage>}>{" "}</Route>
              <Route path="/tv/:detailId" element={<DetailPage></DetailPage>}>{" "}</Route>
            </Routes>
            <Footer></Footer>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
