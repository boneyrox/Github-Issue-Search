import React from "react";
import ShowData from "./ShowData";
import './css/extractData.css'
// console.log(data[1].title);
// console.log(data[1].number);
// console.log(data[1].user.login);
// console.log(data[1].labels[0].name);
// console.log(data[1].labels[0].color);

function ExtractData({ apiData }) {
  return (
    <div className="extract-data">
      {apiData.map((data,index) => {
      console.log(data.html_url);
        return <ShowData title={data.title} number={data.number} user={data.user.login} url={data.html_url} key={index}   />;
      })}
    </div>
  );
}

export default ExtractData;
