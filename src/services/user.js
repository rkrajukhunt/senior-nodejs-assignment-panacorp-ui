import Service from './index';

export const signUpService = async (data) => {
    let result = await Service.post('/user/signup', data);
    return result.data.response;
}

export const loginService = async (data) => {
    let result = await Service.post('/user/login', data);
    return result.data.response;
}

export const factorialService = async (num) => {
    let result = await Service.get('/user/fact/' + num);
    return result.data.response;
}