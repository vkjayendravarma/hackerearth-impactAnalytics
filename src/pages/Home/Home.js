import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import { getCandidateData } from "../../services/http.service";



// import CandidateCard from '../CandidateCard/CandidateCard';
class Home extends Component {
    constructor() {
        super()
        this.state = { candidates: [] }
    }

    componentDidMount() {
        getCandidateData().then(res => {
            console.log(res.data);
            this.setState({ candidates: res.data })
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return <div>
            <NavBar />
            <Dashboard />

        </div>;
    }
}

export default Home;