import React from 'react'

const Logout = () => {
    const logout=()=>{
        localStorage.removeItem("token");
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
