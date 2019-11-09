import axios from 'axios'
import { JPA_API_URL } from '../../Constants'

class SuperFoodDataService {

    retrieveAllSuperFood(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/${name}/superFoods`);
    }

    retrieveSuperFood(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/${name}/superFoods/${id}`);
    }

    deleteSuperFood(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/${name}/superFoods/${id}`);
    }

    updateSuperFood(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/${name}/superFoods/${id}`, todo);
    }

    addSuperFood(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/${name}/superFoods/`, todo);
    }

}

export default new SuperFoodDataService()
