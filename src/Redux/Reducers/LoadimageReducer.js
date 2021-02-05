import * as actions from '../Actions/LoadimageAction'

export const initialState = {
    carselData: [],
    gridData: []
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOADCAROUSEL:
            return carsel_data(state, action);
        case actions.LOADGRID:
            return gaid_data(state, action);
        default:
            return state;
    }
}

const carsel_data = (state, action) => {
    return {
        ...state,
        carselData: action.payload,
    };
};

const gaid_data = (state, action) => {
    return {
        ...state,
        gridData: action.payload,
    };
};