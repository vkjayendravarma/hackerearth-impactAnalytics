// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

import CandidateCard from '../CandidateCard/CandidateCard';

import "./Dashboard.css"
import React, { Component } from 'react';

class Dashobard extends Component {

  constructor() {
    super()
    this.state = { candidates: [], search: "", filteredData: [], type: "" }

    this.search = this.search.bind(this);
    this.searchFormControl = this.searchFormControl.bind(this);
  }

  setupSpecificProcessedData() {
    let data = JSON.parse(window.localStorage.getItem("data"))
    this.setState({ candidates: data })
    this.setState({ type: this.props.type })
    if (this.props.type == "all") {
      this.setState({ filteredData: data })
    } else if (this.props.type == "pool") {
      let processed = []
      processed = this.state.candidates.filter(candidate => {
        return candidate.status === undefined
      })
      this.setState({ filteredData: processed })
    }
    else {
      let processed = []
      processed = this.state.candidates.filter(candidate => {
        return candidate.status === this.props.type
      })
      this.setState({ filteredData: processed })
    }
  }


  componentDidMount() {    
    this.setupSpecificProcessedData()
  }

  componentDidUpdate(){
    if (this.state.type == this.props.type){
     return
    }
    this.setupSpecificProcessedData()
  }




  searchFormControl(event) {
    this.setState({ search: event.target.value });
    this.search(event)
  }

  search(event) {
    let data = this.state.filteredData
    if (this.state.search == "") {
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

export default Dashobard;

// function Dashboard() {
//   let candidates = []
//   let filteredData = []

//   let [reRender, setReRender] = useState(false)

//   const [searchField, setSearchField] = useState("");
//   let { type } = useParams()

//   useEffect(() => {
//     if (reRender) {
//       setReRender(false)
//     }
//     console.log(filteredData);
//   })

//   if (candidates.length == 0) {
//     let data = JSON.parse(window.localStorage.getItem("data"))
//     candidates = data
//     if (type == "all") {
//       filteredData = data
//     } else if (type == "pool") {
//       filteredData = []
//       filteredData = candidates.filter(candidate => {
//         return candidate.status === undefined
//       })
//     }
//     else {
//       filteredData = []
//       filteredData = candidates.filter(candidate => {
//         return candidate.status === type
//       })
//       console.log(filteredData);

//     }

//   }



//   const search = (event) => {
//     event.preventDefault();

//     console.log(searchField);

//     filteredData = []

//     if (searchField === "") {
//       filteredData = candidates
//       return
//     }
//     filteredData = candidates.filter(candidate => String((candidate.name)).toLocaleLowerCase().includes(String(searchField).toLocaleLowerCase()))

//     console.log(filteredData);
//     setReRender(true)
//   }




//   return (
//     <div className="dashboard">
//       <div className="container">
//         <div className="searchFormFieldWrapper" align="center">
//           <form className="searchForm" onSubmit={search}>
//             <label>
//               search:
//               <input type="text" name="name" className="searchFormField" value={searchField} onChange={e => setSearchField(e.target.value)} />
//             </label>
//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//         <h1 className="title">List of candidates</h1>
//         <div className="row">
//           {
//             filteredData.length ?
//               filteredData.map(candidate => {
//                 if (true)
//                   return <div className="col" key={candidate.id} align="center"> <CandidateCard candidate={candidate}></CandidateCard> </div>
//                 return ""
//               }) :
//               null
//           }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
