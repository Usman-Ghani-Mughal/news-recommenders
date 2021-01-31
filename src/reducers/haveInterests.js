
const haveInterestsReducer = (state = false, action) =>{
    switch(action.type){
        case 'gotinterests':
            return !state;
        default:
            return state;
    }
}

export default haveInterestsReducer;