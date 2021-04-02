import axios from 'axios'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import React, {useEffect, useState} from 'react'
import style from "./Category.module.css"

const Category = () => {
    
   
    const selected_category=[]
    
    async function getCategories(){
        try{
            const res = await axios.get(`https://vovoca.herokuapp.com/api/music/?category=${selected_category.join("+")}`)
        }
        catch{
            console.error("error")
        }
        
        
    }

     function handleClick(e, category){
         if(process.browser){
         
            if(selected_category.indexOf(category.toLowerCase())!==-1){
                console.log(selected_category.indexOf(category.toLowerCase()))
                selected_category.splice(selected_category.indexOf(category.toLowerCase()),1)
            }else selected_category.push(category.toLowerCase())
           
           const param = document.getElementById(e)
           const classes = param.classList
           console.log(classes)
           if(classes.length===1){
               param.classList.add("Category_selected__k-mej")
           }else{
               param.classList.remove("Category_selected__k-mej")
           }
           
            console.log(selected_category)
         }
         
     }
    return (
        <div className={style.category}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.category__card}>
                        <div id="1" className={style.category__card__icon} style={{backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5mac.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fapple-music-rap-life.jpeg%3Fresize%3D1024%2C576&f=1&nofb=1)`}} onClick={(e)=>handleClick(e.target.id, "Hip-Hop")}>
                            <h3>Hip-Hop</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card} >
                        <div id="2"  className={style.category__card__icon} style={{backgroundImage:`url(https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}} onClick={(e)=>handleClick(e.target.id, "Bass")}>
                            <h3>Bass</h3>

                        </div>
                       
                    </div>
                    <div className={style.category__card}>
                        <div id="3"  className={style.category__card__icon} style={{backgroundImage:`url(https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}} onClick={(e)=>handleClick(e.target.id, "Chill")}>
                            <h3>Chill</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card}>
                        <div id="4"  className={style.category__card__icon} style={{backgroundImage: `url(https://imageproxy.themaven.net//https%3A%2F%2Fimages.saymedia-content.com%2F.image%2FMTc0NDUyMjI0MzcyNTE2NDg2%2F200-greatest-bollywood-dance-songs-dance-hits-for-parties.jpg)`}} onClick={(e)=>handleClick(e.target.id, "Beats")}>
                            <h3>Beats</h3>

                        </div>
                       
                    </div>
                    <div className={style.category__card}>
                        <div id="5"  className={style.category__card__icon} style={{backgroundImage: `url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_491119158_283701.jpg)`}} onClick={(e)=>handleClick(e.target.id, "Musical")}>
                            <h3>Musical</h3>

                        </div>
                        
                    </div>
                   
                </div>
                <div className={style.row}>
                <div className={style.category__card}>
                        <div id="6"  className={style.category__card__icon} style={{backgroundImage:`url(https://cdn.shopify.com/s/files/1/1728/2157/articles/37.jpg?v=1552935505)`}} onClick={(e)=>handleClick(e.target.id, "Slow")}>
                            <h3>Slow</h3>

                        </div>
                        
                    </div>
                <div className={style.category__card}>
                        <div id="7"  className={style.category__card__icon} style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpodcasts.nickware.ru%2Fedm%2Flogo.jpeg&f=1&nofb=1")`}} onClick={(e)=>handleClick(e.target.id, "EDM")}>
                            <h3>EDM</h3>

                        </div>
                       
                    </div>
                    <div className={style.category__card}>
                        <div id="8"  className={style.category__card__icon} style={{backgroundImage:`url(https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}} onClick={(e)=>handleClick(e.target.id, "Electric")}>
                            <h3>Electric</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card}>
                        <div id="9"  className={style.category__card__icon} style={{backgroundImage: `url(https://www.theeapts.com/blog/wp-content/uploads/sites/3997/2019/10/wpid-microphone2.jpg)`}} onClick={(e)=>handleClick(e.target.id, "Vocal")}>
                            <h3>Vocal</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card}>
                        <div id="10"  className={style.category__card__icon} style={{backgroundImage: `url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)` }} onClick={(e)=>handleClick(e.target.id, "House")}>
                            <h3>House</h3>

                        </div>
                        
                    </div>
                    
                </div>

            </div>
            <div className={style.search_btn}>
                <button onClick={()=>getCategories()}>Search</button>
            </div>
        </div>
    )
}

export default Category
