import React, { Component } from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import { getCandidateData } from "../../services/http.service";



// import CandidateCard from '../CandidateCard/CandidateCard';
class Home extends Component {
    constructor() {
        super()
        this.state = {  }
    }

    componentDidMount() {
        getCandidateData().then(res => {
            window.localStorage.setItem("data", JSON.stringify(res.data))
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return <div>
            <NavBar />
            <Outlet />

        </div>;
    }
}

export default Home;