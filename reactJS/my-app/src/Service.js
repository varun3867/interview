import axios from "axios";

const URL = "http://localhost:3000";

class Service {
    
    getResource=()=>{
        return axios.get(`${URL}/`);
    }
}

export default new Service();