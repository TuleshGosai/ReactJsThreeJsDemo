import React, { useState } from "react";
import "./Container.css";
import Floore3d from "./modules/floore3D";
import Footer from "./modules/footer";

function Container() {
  const [colorBody, setColorBody] = useState('');
 
  return (
    <div className="App" style={{ background: colorBody || 'black', transition: '0.5s' }}>
      <Floore3d />
      <Footer setColorBody={setColorBody} />
    </div>
  );
}

export default Container;

