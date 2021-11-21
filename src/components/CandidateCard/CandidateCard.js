import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./CandidateCard.css";

class CandidateCard extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }

    render() {
        const { candidate } = this.props
        return (
            <div className="card" >
                <div className="card-body">
                    <div className="candidateImgWrapper">
                        <img src={candidate.Image} className="candidateImg " alt="CnadidateImage" />
                    </div>
                    <div className="candidateInfo">
                        <p className="candidateId wdt-fit-content"> {candidate.id}</p>
                        <h5 className="candidateName wdt-fit-content">Name: {candidate.name} </h5>
                        <NavLink to={`/dashboard/candidate/${candidate.id}`}> <button>View</button> </NavLink>
                    </div>

                </div>
            </div>


        );
    }
}

export default CandidateCard;