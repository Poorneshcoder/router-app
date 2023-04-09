import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Redux/ReduxAction/actionCreators";
// import { purchaseProduct, restoreProduct } from "../Redux/ReduxAction";

const Orders = () => {
    // variables for the function......
    const reduxState = useSelector((state)=>state);
    const dispatch = useDispatch();
    // const purchaseDispatch = useDispatch(purchaseProduct);
    // const purchaseDispatch = useDispatch(restoreProduct);

    const {purchaseProduct, restoreProduct} = bindActionCreators(actionCreators, dispatch)

    // const allactions = bindActionCreators(actionCreators, dispatch);
    // console.log(allactions);

    console.log(reduxState);
    console.log(reduxState.inventory);
    console.log(reduxState.userList);

    const [inventory, setInventory] = useState(0);
    const [restore, setRestore] = useState(0);
    const [purchase, setPurchase] = useState(0);

    return(
        <div>
            <h1>order your no of juice here</h1>
            overall inventory : {reduxState.inventory} {''}
            <div>
                <input
                value={restore}
                placeholder="restore"
                onChange={(e)=> setRestore(e.target.value)}
                />

                {" "}

                <input
                value={purchase}
                placeholder="purchase"
                onChange={(e)=> setPurchase(e.target.value)}
                />
                
            </div>
            <button
            onClick={()=>restoreProduct(restore)} 
            >Add Inventory</button>
                {" "}
            <button
            onClick={()=>purchaseProduct(purchase)}
            >Purchase order</button>

            <hr></hr>

            set inventory : {inventory} {" "}
            <button
            onClick={()=>setInventory(inventory + 100)}
            >Add Inventory</button>
                {" "}
            <button
            onClick={()=>setInventory(inventory - 50)}
            >Purchase order</button>



        </div>
    )
}

export default Orders;