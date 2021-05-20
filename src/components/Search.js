import React from "react";
import "./css/search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search({ repoName, ownerName, setExtract, setApiData }) {
  function apiCall() {
    fetch(`https://api.github.com/repos/${ownerName}/${repoName}/issues`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setExtract(true);
      });
  }
  return (
    <div>
      <div>
        <button className="search-button" onClick={apiCall}>
          Search <SearchIcon className="search-icon" />
        </button>
      </div>
    </div>
  );
}

export default Search;
