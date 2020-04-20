const INCREASE = 'counter/INCREASE';
const DESCREASE = 'counter/DECREASE';

export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DESCREASE});