import React, { useContext, useState } from "react";
import { ReducerContext } from "../App";

const Context = () =>{
    // const [data, setData] = useState([1,2,3]);
    const [state, dispatch] = useContext(ReducerContext);
    console.log(state);

    const [field, setField] = useState("");
    

    const handleAdd = ()=>{
        // setData([...data, field]);
        dispatch({type:"add-value", payload:field});
    }

    return(
        <div>
            <input
            type="text"
            value={field}
            onChange={(e)=>setField(e.target.value)}
            />

            <button
            onClick={handleAdd}
            >
                Add me
            </button>
            <ul>{state.datas.map((item, idx)=><li key={idx}>{item}</li>)}</ul>

        </div>
    )
}

export default Context;