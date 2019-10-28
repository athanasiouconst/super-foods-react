import axios from 'axios'

class SuperFoodService {

    executeSuperFoodService() {
        //console.log('executed service')
        //return axios.get('https://nutrear.co-athanasiou.gr/main');
        return axios.get('http://localhost:5000/main');
        //return axios.get('https://nutrear-java.us-east-2.elasticbeanstalk.com/main');
    }

    executeSuperFoodBeanService() {
        //console.log('executed service')
        //return axios.get('https://nutrear.co-athanasiou.gr/main-bean');
        return axios.get('http://localhost:5000/main-bean');
        //return axios.get('https://nutrear-java.us-east-2.elasticbeanstalk.com/main-bean');
    }

    executeSuperFoodPathVariableService(name) {
        //console.log('executed service')
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        //return axios.get(`https://nutrear.co-athanasiou.gr/path-variable/${name}`
        return axios.get(`http://localhost:5000/main/path-variable/${name}`
        //return axios.get(`https://nutrear-java.us-east-2.elasticbeanstalk.com/main/path-variable/${name}`
            // ,
            //     {
            //         headers : {
            //             authorization: basicAuthHeader
            //         }
            //     }
        );
    }

    retrieveAllSuperFood(name) {
        //console.log('executed service')
        return axios.get(`http://localhost:5000/${name}/superFoods`);
    }

    retrieveSuperFood(name,id) {
        //console.log('executed service')
        return axios.get(`http://localhost:5000/${name}/superFoods/${id}`);
    }

    deleteSuperFood(name, id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:5000/${name}/superFoods/${id}`);
    }

    updateSuperFood(name, id, superFood) {
        //console.log('executed service')
        return axios.put(`http://localhost:5000/${name}/superFoods/${id}`, superFood);
    }

    addSuperFood(name,  superFood) {
        //console.log('executed service')
        return axios.post(`http://localhost:5000/${name}/superFoods/`, superFood);
    }
}

export default new SuperFoodService()
