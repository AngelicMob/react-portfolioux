import React from "react";
import "./PointList.scss";
function PointList({ title = "", index = 0, lastItem = false, children }) {
  return (
    <div className="dot-list">
        <div className="left-handside">
          <div className="dot">{index} </div>
          {/* if the last item is true, it won't repeat the styling of the dot and line after the last item in the "item-content div"*/}
          {!lastItem ? <div className="line"></div> : null} 
        </div>
        <div className="right-handside">
          <h1 className="heading">{title}</h1>
          <div className="item-content">{children}</div>
        </div>
    </div>
  );
}
export default PointList;
