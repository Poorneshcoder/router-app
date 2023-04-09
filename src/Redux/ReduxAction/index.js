export const restoreProduct = (products) => {
        // dispatching the type and payload
        return (dispatch) => {
                dispatch({
                        type: "restore_the_inventory",
                        payload: products,
                })


        }
}

export const purchaseProduct = (purchase) => {
        // dispatching the type and payload
        return (dispatch) => {
                dispatch({
                        type: "purchase_list",
                        payload: purchase,

                })

        }
}

// export {restoreProduct, purchaseProduct}


// synchronus functions 
const loaderFunction = () => {
        return {
                type:"loading_data",
        }
}

const fetchedData = (usersData) => {
        return {
                type:"fetched_userData",
                payload:usersData,
        }
}

const errorData = (errors) => {
        return {
                type:"error_hitted",
                payload:errors,
        }
}

// asynchronus action

 export const fetchTheUserDetails = () => {
        // returning the dispatch function
        return (dispatch) => {
                // before fetching the data loading the component
                dispatch(loaderFunction());

                // fetching of data and also error handling...

                fetch("https://63f9eb78897af748dcc59d23.mockapi.io/students", {
                        method: "GET"
                })
                .then(data => data.json())
                .then(users => dispatch(fetchedData(users)))
                .catch(err => dispatch(errorData(err.message)))


                
        }
}