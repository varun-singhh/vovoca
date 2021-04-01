import React from 'react'
import { useSelector } from 'react-redux';
const Profile = () => {
    const authenticated = useSelector((state) => state.auth);
    return (
        <div>
            <h1>This is Profile Component</h1>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",color:"gray"}}>
                <p>Username: @{authenticated.data.username}</p>
                <p>Email Id: {authenticated.data.email}</p>
                <p><b>Vovoca Id:</b>{authenticated.data._id}</p>
            </div>
        </div>
    )
}

export default Profile
