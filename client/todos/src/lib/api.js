import axios from 'axios';


const TODOS_SERVER = 'http://127.0.0.1:3000';

export default axios.create({
    baseURL: TODOS_SERVER    
});

export const OPTION_JSON = {
    headers: {
        'Content-type': 'application/json'
    }
};