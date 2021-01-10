


const googleLoginReducer = (state = false, action) =>{
    switch(action.type){
        case 'googlelogin':
            return action.payload;
        default:
            return state;
    }
}

export default googleLoginReducer;