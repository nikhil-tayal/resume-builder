import React from "react";
import { A4Paper } from "../Components";
import InputLabel from "../Components/InputLabel/InputLabel";

export default function templateBasic() {
  return (
    <div className="template-basic__wrapper container">
      <A4Paper>
        <div className="left__section">
          <div className="heading">
            <div className="heading-name">
              <InputLabel />
            </div>
            <div className="heading-position">
              <InputLabel />
            </div>
          </div>
        </div>
        <div className="right__section"></div>
      </A4Paper>
    </div>
  );
}
