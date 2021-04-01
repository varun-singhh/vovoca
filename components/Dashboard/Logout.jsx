import React from 'react'
import Link from 'next/link';

const Logout = () => {
    const logout=()=>{
        localStorage.setItem("token",null);
    }
    return (
        <div>
            <h1>Are you sure ?</h1>
            <button onClick={()=>logout()}>Yes I'm</button><br/>
        </div>
    )
}

export default Logout
