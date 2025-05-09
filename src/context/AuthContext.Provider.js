import authContext from "./AuthContext";
import React, { useState } from "react";

const AuthContext=({children})=>{

    const[auth,setAuth] = useState(false)

    return (
        <div>
            <authContext.Provider value={{auth,setAuth}}>
                {children}
            </authContext.Provider>
        </div>
    )
}

export default AuthContext;