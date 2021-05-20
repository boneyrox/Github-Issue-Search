import React from 'react'
import './css/pagination.css'
function Pagination({issuePerPage , totalIssues, paginate}) {
    const pageNumbers = [];


    for(let i=1;i<=Math.ceil(totalIssues/issuePerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav id="paginate-style" className="pagination">
            {pageNumbers.map((number)=>{
                return(
                    <li key={number} className="page-item">
                        <a onClick={()=>{
                            paginate(number)
                        }} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                )
            })}
        </nav>
    )
}

export default Pagination
