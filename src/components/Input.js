import React, { useState } from "react";
import Search from "./Search";
import "./css/input.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExtractData from "./ExtractData";
import "./css/pagination.css";
import Pagination from "./Pagination";

function Input() {
  const [ownerName, setOwnerName] = useState();
  const [repoName, setRepoName] = useState();
  const [extract, setExtract] = useState(false);
  const [apiData, setApiData] = useState();
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuePerPage] = useState(8);

  let indexOfLastIssue;
  let indexOfFirstIssue;
  let currentIssues;
  if (extract) {
    indexOfLastIssue = currentPage * issuePerPage;
    indexOfFirstIssue = indexOfLastIssue - issuePerPage;
    currentIssues = apiData.slice(indexOfFirstIssue, indexOfLastIssue);
  }

  function handleOwnerName(e) {
    setOwnerName(e.target.value);
  }
  function handleRepoName(e) {
    setRepoName(e.target.value);
  }
  const paginate = (number) => {
    setCurrentPage(number);
  };
  console.log(repoName);
  console.log(ownerName);
  return (
    <div className="main-input">
      <div className="input">
        <GitHubIcon className="svg_icons" />
        <input
          type="text"
          onChange={handleOwnerName}
          placeholder="Username..."
        />
        <input
          type="text"
          onChange={handleRepoName}
          placeholder="Reponame..."
        />
        <div className="search">
          <Search
            ownerName={ownerName}
            repoName={repoName}
            setExtract={setExtract}
            setApiData={setApiData}
          />
        </div>
      </div>
      {extract ? (
        <>
          <ExtractData apiData={currentIssues} />
          <Pagination
            issuePerPage={issuePerPage}
            totalIssues={apiData.length}
            paginate={paginate}
          />
        </>
      ) : null}
    </div>
  );
}

export default Input;
