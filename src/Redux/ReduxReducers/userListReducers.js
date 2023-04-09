
const initialState = {
    loading: false,
    users : [],
    errors : "",
}




const userListReducers = (state = initialState, action) => {
    switch (action.type) {
        case "loading_data":
            return {...state, users:[], loading:true, errors:""}

        case "fetched_userData":
            return {...state, users:action.payload, errors:"", loading:false}

        case "error_hitted":
            return {...state, errors:action.payload, users:[], loading:false}

        default :
            return state;
    }
}

export default userListReducers;