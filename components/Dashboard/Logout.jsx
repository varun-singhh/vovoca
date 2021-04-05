import React from 'react'
import cookie from 'js-cookie'

const Logout = () => {
    const logout=()=>{
        cookie.remove("token");
        if(process.browser){
            window.location.href="/"
        }
    }
    return (
        <div>
            <h1>Are you sure ?</h1>
            <button onClick={()=>logout()}>Yes I'm</button><br/>
        </div>
    )
}

export default Logout
