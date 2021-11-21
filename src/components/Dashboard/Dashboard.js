import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import CandidateCard from '../CandidateCard/CandidateCard';

import "./Dashboard.css"

function Dashboard() {
  let state = { candidates: [], filteredData: [] }

  let candidates = []
  let filteredData = []

  // let [candidates, setcandidates] = useState(null)
  // let [filteredData, setfilteredData] = useState(null)

  let [reRender, setReRender] = useState(false)
  // let [renederFetchData, setRenderFetchData] = useState(true)

  const [searchField, setSearchField] = useState("");
  let { type } = useParams()

  useEffect(() => {
    if (reRender) {
      setReRender(false)
    }
    console.log(filteredData);
  })


  let data = JSON.parse(window.localStorage.getItem("data"))
  candidates = data
  if (type == "all") {
    filteredData = data
  } else if (type == "pool") {
    filteredData = []
    filteredData = candidates.filter(candidate => {
      return candidate.status === undefined
    })
  }
   else {
    filteredData = []
    filteredData = candidates.filter(candidate => {
      return candidate.status === type
    })
    console.log(filteredData);

  }


  const search = (event) => {
    event.preventDefault();

    console.log(searchField);

    filteredData = []

    if (searchField === "") {
      filteredData = candidates
      return
    }
    filteredData = candidates.filter(candidate => String((candidate.name)).toLocaleLowerCase().includes(String(searchField).toLocaleLowerCase()))

    console.log(filteredData);
    // setReRender(true)
  }




  return (
    <div className="dashboard">
      <div className="container">
        <div className="searchFormFieldWrapper" align="center">
          <form className="searchForm" onSubmit={search}>
            <label>
              search:
              <input type="text" name="name" className="searchFormField" value={searchField} onChange={e => setSearchField(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <h1 className="title">List of candidates</h1>
        <div className="row">
          {
            filteredData.length ?
              filteredData.map(candidate => {
                if (true)
                  return <div className="col" key={candidate.id} align="center"> <CandidateCard candidate={candidate}></CandidateCard> </div>
                return ""
              }) :
              null
          }
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
