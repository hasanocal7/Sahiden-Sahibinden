import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/footer.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const [language, setLanguage] = React.useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="kapsam mt-5">
      <div className="kapsayıcı">
        <div className="first">
          <h4>Kurumsal</h4>
          <ul className="iconFooterList">
            <li>Hakkımızda</li>
            <li>Sürdürülebilirlik</li>
            <li>İnsan Kaynakları</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div className="second">
          <h4>Hizmetlerimiz</h4>
          <ul className="iconFooterList">
            <li>S-Param Güvende</li>
            <li>Güvenli e-Ticaret</li>
            <li>Reklam</li>
            <li>Mobil</li>
          </ul>
        </div>
        <div className="third">
          <h4>Bizi Takip Edin</h4>
          <ul className="iconFooterList">
            <li>
              <FacebookIcon />
              Facebook
            </li>
            <li>
              <LinkedInIcon />
              Linkedin
            </li>
            <li>
              <InstagramIcon />
              Instagram
            </li>
            <li>
              <YouTubeIcon />
              Youtube
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomArea">
        <div className="bir">
          <LocalPhoneIcon />
          <div className="bot">
            <p>7/24 Müşteri Hizmetleri</p>
            <p>05373555007</p>
          </div>
        </div>
        <div className="iki">
          <QuestionAnswerIcon />
          <div className="help">
            <p>Yardım Merkezi</p>
            <p>yardim.sahibinden.com</p>
          </div>
        </div>
        <div className="üç">
          <FormControl fullWidth>
            <InputLabel id="language-select-label">Dil</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label="Dil"
              onChange={handleLanguageChange}
            >
              <MenuItem value="tr">Türkçe</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Footer;
