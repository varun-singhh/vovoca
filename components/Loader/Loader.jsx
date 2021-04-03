import React from 'react'
import { PushSpinner } from "react-spinners-kit";
const Loader = ({loading}) => {
    return (
        <div style={{display:"flex",justifyContent:"center",zIndex:"1000",marginTop:"30%"}}>
            <PushSpinner size={50} color="#f7c364" loading={loading} />
        </div>
       
    )
}

export default Loader
