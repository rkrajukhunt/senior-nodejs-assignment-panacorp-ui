import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://panacorp-node.herokuapp.com',
})