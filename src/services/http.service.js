import axios from 'axios';

export function getCandidateData() {
    return axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
}

