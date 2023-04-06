// creation of inventory reducers

const inventoryReducer = (state = 5, action) => {
    switch(action.type){
        case "restore_the_inventory":
            return state + action.payload;
        case "purchase_list":
            return state - action.payload;

            default :
            return state;
    }
}

export default inventoryReducer;