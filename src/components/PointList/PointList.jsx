import React from "react";
import './PointList.scss'
function PointList({ title = "", index = 0, lastItem = false, children }) {
  return (
    <div className="dot-list">
      <div className="left-handside">
        <div className="dot">{index} </div>
        {!lastItem ? <div className="line"></div> : null}
      </div>

      <div className="right-handside">
        <h1 className="heading">{title}</h1>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default PointList;