import React, { Component } from 'react';
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
                        {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
                    </div>

                </div>
            </div>

        );
    }
}

export default CandidateCard;