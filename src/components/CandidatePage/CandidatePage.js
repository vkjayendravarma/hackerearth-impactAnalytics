import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

function CandidateProfile(params) {
    let navigate = useNavigate();

    let state = {}
    state.id = null

    let [reRender, setReRender] = useState(false)

    const { id } = useParams()

    let  candidate
    let indexOfCandidate
    // let [indexOfCandidate, setIndexOfCandidate] = useState(0)

    let data = JSON.parse(window.localStorage.getItem("data"))
    for (let index = 0; index < data.length; index++) {
        const can = data[index];
        if (can.id === id) {
            candidate = can
            indexOfCandidate = index
            break
        }
    }

    const redirectHome = () => {
        console.log("navigae");
        navigate("/dashboard/all",{ replace: true })
    }
    const shortlist = () => {
        data[indexOfCandidate].status = "shortlisted"
        window.localStorage.setItem("data", JSON.stringify(data))
        redirectHome()
    }

    const rejected = () => {
        data[indexOfCandidate].status = "rejected"
        window.localStorage.setItem("data", JSON.stringify(data))
        redirectHome()
    }
    useEffect(() => {
        if(reRender){
            setReRender(false)
        }        
    }, [reRender])

    return (
        <div align="center">
            <div className="candidateImgWrapper">
                <p> candidate info</p>
                <img src={candidate.Image} className="candidateImg " alt="CnadidateImage" />
            </div>
            <div className="candidateInfo">
                <p className="candidateId wdt-fit-content"> {candidate.id}</p>
                <h5 className="candidateName wdt-fit-content">Name: {candidate.name} </h5>

                <p> Status: {candidate.status}</p>

                <button onClick={shortlist} className="mrr">Short List</button>
                <button onClick={rejected} >Reject</button>
            </div>
        </div>
    );
}

export default CandidateProfile;