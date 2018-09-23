import axios from "axios";

const api = {
    getPoints : () => {
       return axios.get("https://bikewise.org/api/v2/locations?incident_type=theft&proximity=texas&proximity_square=300&limit=30")
    }

};

export default api;