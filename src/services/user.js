import Service from './index';

export const signUpService = async (data) => {
    try{
        let result = await Service.post('/user/signup', data);
        return result.data.response;
    }
    catch(err){
        console.log(err);
    }
}

export const loginService = async (data) => {
    try{
        let result = await Service.post('/user/login', data);
        return result.data.response;
    }
    catch(err){
        console.log(err);
    }
}

export const factorialService = async (num) => {
    try{
        let result = await Service.get('/user/fact/' + num);
        return result.data.response;
    }
    catch(err){
        console.log(err);
    }
}