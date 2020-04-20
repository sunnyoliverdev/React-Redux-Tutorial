const INCREASE = 'counter/INCREASE';
const DESCREASE = 'counter/DECREASE';

export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DESCREASE});

const initialState = {
    number: 0
}

function counter(state =initialState, action){
    switch(action.type)
    {
        case INCREASE:
            return {number:state.number+1};
        case DESCREASE:
            return {number:state.number-1};
        default:
            return state;
    }
}

export default counter;