import { Image, Box } from "@chakra-ui/react";
import footer_logo from "../../assets/footer-logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Box bg="#052641" height="206px">
        <Image src={footer_logo} m={[0, 5]} width="150px" mt="28px"></Image>
      </Box>
    </div>
  );
};
export default Footer;
