import {applications} from '../../public/mock-data';

export const getPlyos = () => dispatch => {
    console.log('dispatching in plosAction')
    dispatch({
    type: "GET_PLYOS",
    payload: applications
    })
};
