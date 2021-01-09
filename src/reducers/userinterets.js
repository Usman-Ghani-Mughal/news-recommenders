

const userInterestsReducer = (state = "", action) =>{
    switch(action.type){
        case 'setIntersts':
            return action.payload;
        default:
            return state;
    }
}

export default userInterestsReducer;