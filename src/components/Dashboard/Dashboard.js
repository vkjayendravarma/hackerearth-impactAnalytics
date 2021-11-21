import React, { Component } from 'react';

import { getCandidateData } from "../../services/http.service";
import CandidateCard from '../CandidateCard/CandidateCard';

import "./Dashboard.css"

class Dashboard extends Component {

  constructor() {
    super()
    this.state = { candidates: [], search: "", filteredData: [] }

    this.search = this.search.bind(this);
    this.searchFormControl = this.searchFormControl.bind(this);
  }

  componentDidMount() {
    getCandidateData().then(res => {
      console.log(res.data);
      this.setState({ candidates: res.data })
      this.setState({ filteredData: res.data })

    }).catch(err => {
      console.error(err);
    })
  }


  searchFormControl(event) {
    this.setState({ search: event.target.value });
    this.search(event)
  }

  search(event) {
    let data = this.state.candidates
    if (this.state.search == ""){
      this.setState({ filteredData: data })
    }
    event.preventDefault();
    console.log(this.state.search);

    

    let filteredData = data.filter(candidate => String((candidate.name)).toLocaleLowerCase().includes(String(this.state.search).toLocaleLowerCase()))
    this.setState({ filteredData: filteredData })
    console.log(filteredData);
  }


  render() {
    let { filteredData } = this.state
    return (
      <div className="dashboard">
        <div className="container">
          <div className="searchFormFieldWrapper" align="center">
            <form className="searchForm" onSubmit={this.search}>
              <label>
                search:
                <input type="text" name="name" className="searchFormField" value={this.state.search} onChange={this.searchFormControl} />
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
}

export default Dashboard;