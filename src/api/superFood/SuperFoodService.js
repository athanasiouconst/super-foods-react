import axios from 'axios'

class SuperFoodService {

    executeSuperFoodService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/main');
    }

    executeSuperFoodBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/main-bean');
    }

    executeSuperFoodPathVariableService(name) {
        //console.log('executed service')
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/main/path-variable/${name}`
            // ,
            //     {
            //         headers : {
            //             authorization: basicAuthHeader
            //         }
            //     }
        );
    }

}

export default new SuperFoodService()
