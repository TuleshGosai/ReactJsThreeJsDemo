import React from "react";
import Icons from "../../Iocns";
import "./footer.css";
import SelectCom from "../../component/select";
import { dropdownData } from "../../configuration/fackData";

const Footer = (props) => {
  const { setColorBody } = props;

  const themeHandler = (value) => {
    setColorBody(value);
  };

  return (
    <div className="mainFooter">
      <div className="subFooter">
        <div style={{ display: "flex"}}>
          <div style={{ marginTop: '10px' }}> Lighting </div>
          <div className="togglerHandle">
            <div onClick={() => themeHandler("#eedbcd")} className="sunIcn">
              <Icons
                id="sun"
                type="sunIcn"
                iconClass="icon"
              />
            </div>
            <div onClick={() => themeHandler("#302d2a")} className="moonIcn">
              <Icons
                id="moon"
                type="moonIcn"
                iconClass="icon"
              />
            </div>
          </div>
        </div>
        <div className="footerDropdown">
        <SelectCom id="dropdown" changeHandler={(e) => themeHandler(e)} data={dropdownData} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
