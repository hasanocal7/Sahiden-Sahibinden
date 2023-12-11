import React from "react";
import "../style/footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="kapsam mt-5">
      <div className="kapsayıcı">
        <div className="first">
          <h4 style={{color:'#dfdfdf'}} >Kurumsal</h4>
          <ul className="iconFooterList">
            <li>Hakkımızda</li>
            <li>Sürdürülebilirlik</li>
            <li>İnsan Kaynakları</li>
            <li>İletişim </li>
          </ul>
        </div>
        <div className="second">
          <h4 style={{color:'#dfdfdf'}} >Hizmetlerimiz</h4>
          <ul className="iconFooterList">
            <li>S-Param Güvende</li>
            <li>Güvenli e-Ticaret</li>
            <li>Reklam</li>
            <li>Mobil </li>
          </ul>
        </div>
        <div className="third">
          <h4 style={{color:'#dfdfdf'}} >Bizi Takip Edin</h4>
          <ul className="iconFooterList">
            <li ><FacebookIcon/>Facebook</li>
            <li><LinkedInIcon/>Linkedin</li>
            <li><InstagramIcon/>Instagram</li>
            <li><YouTubeIcon/>Youtube </li>
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
          <Box sx={{ width: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Türkçe(Turkish)
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Türkçe(Turkish)"
                onChange={handleChange}>
                <MenuItem value={10}>İngilizce(English)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Footer;
