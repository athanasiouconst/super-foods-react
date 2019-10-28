import axios from 'axios'
import {API_URL} from '../../Constants'
//JPA_API_URL
class SuperFoodService {

    executeSuperFoodService() {
        //console.log('executed service')
        //return axios.get('https://nutrear.co-athanasiou.gr/main');
        return axios.get(`${API_URL}/main`);

        //return axios.get('https://nutrear-java.us-east-2.elasticbeanstalk.com/main');
    }

    executeSuperFoodBeanService() {
        //console.log('executed service')
        //return axios.get('https://nutrear.co-athanasiou.gr/main-bean');
        return axios.get(`${API_URL}/main-bean`);
        //return axios.get('https://nutrear-java.us-east-2.elasticbeanstalk.com/main-bean');
    }

    executeSuperFoodPathVariableService(name) {
        //console.log('executed service')

        //return axios.get(`https://nutrear.co-athanasiou.gr/path-variable/${name}`
        return axios.get(`${API_URL}/main/path-variable/${name}`);
        //return axios.get(`https://nutrear-java.us-east-2.elasticbeanstalk.com/main/path-variable/${name}`


    }

    retrieveAllSuperFood(name) {
        //console.log('executed service')
        return axios.get(`${API_URL}/${name}/superFoods`);
        // return axios.get(`http://localhost:5000/${name}/superFoods`);
    }

    retrieveSuperFood(name, id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/${name}/superFoods/${id}`);
    }

    deleteSuperFood(name, id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/${name}/superFoods/${id}`);
    }

    updateSuperFood(name, id, superFood) {
        //console.log('executed service')
        return axios.put(`${API_URL}/${name}/superFoods/${id}`, superFood);
    }

    addSuperFood(name, superFood) {
        //console.log('executed service')
        return axios.post(`${API_URL}/${name}/superFoods/`, superFood);
    }
}

export default new SuperFoodService()
