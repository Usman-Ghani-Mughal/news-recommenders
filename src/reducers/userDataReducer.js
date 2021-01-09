

const userDataReducer = (state = "", action) =>{
    switch(action.type){
        case 'setUserData':
            return action.payload;
        default:
            return state;
    }
}

export default userDataReducer;