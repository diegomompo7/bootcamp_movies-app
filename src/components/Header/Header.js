import { Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import header_logo from "../../assets/header-logo.png";
import { useContext } from "react";
import { LanguageSelector } from "../../App";
import { FormattedMessage } from "react-intl";
import "./Header.scss";

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);
  return (
    <div className="header">
      <div className="header__nav">
        <Image width="162px" objectFit="cover" src={header_logo} alt="Header Logo" ml="20px" mt="22px" mb="18px" />
        <div className="header__items">
          <Link className="header__items--link" to="/">
            <FormattedMessage id="header:films"></FormattedMessage>
          </Link>
          <Link className="header__items--link" to="">
            <FormattedMessage id="header:quiz"></FormattedMessage>
          </Link>
        </div>
      </div>
      <div className="header__lang">
        <Button onClick={() => setLanguage("es-ES")} bg="#052641" color="white" borderRadius="30px" fontSize="18px">
          ES
        </Button>
        <Button onClick={() => setLanguage("en-EN")} bg="#052641" color="white" borderRadius="30px" fontSize="18px">
          EN
        </Button>
      </div>
    </div>
  );
};

export default Header;
