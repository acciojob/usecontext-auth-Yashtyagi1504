import React from "react"
import authContext from "../context/AuthContext"
import { useContext} from "react"



const Auth = ()=>{
    
    let {auth,setAuth} = useContext(authContext)

    return (
        <div>
            <h1>Click on the checkbox to get authenticated</h1>
            {
                auth ? <p className="authText">You are now authenticated, you can proceed</p> : <p>you are not authenticated</p>
            }
            <label>
                <input type="checkbox" onChange={()=>auth?setAuth(false):setAuth(true)}></input>
                I'm not a robot
            </label>
        </div>
    )
}

export default Auth