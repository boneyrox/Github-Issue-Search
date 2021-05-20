import React from "react";
import "./css/showData.css";
function ShowData({ title, number, user, url }) {
  return (
    <div>
      <div className="showData">
        <div className="innerData">
          <div className="row-1">
            <input type="checkbox" className="checkbox" />
            <a href={url} target="__blank"><h1 className="title">{title}</h1></a>
          </div>
          <div className="row-2">
            <p className="number">#{number}</p>
            <p className="user">opened by {user}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowData;
