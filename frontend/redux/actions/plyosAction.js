import {applications} from '../../public/mock-data';

export const getPlyos = () => dispatch => {
    dispatch({
    type: "GET_PLYOS",
    payload: applications
    })
};
