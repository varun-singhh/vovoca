import axios from 'axios'
import React, {useEffect, useState} from 'react'
import style from "./Category.module.css"

const Category = () => {
    const tags = ["pad", "beats", "hip-hop", "chill"]
   
    const selected_category=[]
    useEffect(() => {
        
        
    }, [])
    async function getCategories(){
        const res = await axios.get(`https://vovoca.herokuapp.com/api/music/?category=${tags.join("+")}`)
        console.log(res)
    }

     function handleClick(e, category){
         if(selected_category.indexOf(category)!==-1){
             selected_category.splice(selected_category.indexOf(category), 1)
         }else selected_category.push(category)
        
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
    return (
        <div className={style.category}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.category__card}>
                        <div id="1" className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Hip-Hop")}>
                            <h3>Hip-Hop</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card} >
                        <div id="2"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Bass")}>
                            <h3>Bass</h3>

                        </div>
                       
                    </div>
                    <div className={style.category__card}>
                        <div id="3"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Chill")}>
                            <h3>Chill</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card}>
                        <div id="4"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Beats")}>
                            <h3>Beats</h3>

                        </div>
                       
                    </div>
                    <div className={style.category__card}>
                        <div id="5"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Musical")}>
                            <h3>Musical</h3>

                        </div>
                        
                    </div>
                   
                </div>
                <div className={style.row}>
                <div className={style.category__card}>
                        <div id="6"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Slow")}>
                            <h3>Slow</h3>

                        </div>
                        
                    </div>
                <div className={style.category__card}>
                        <div id="7"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "EDM")}>
                            <h3>EDM</h3>

                        </div>
                       
                    </div>
                    <div className={style.category__card}>
                        <div id="8"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Electric")}>
                            <h3>Electric</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card}>
                        <div id="9"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "Vocal")}>
                            <h3>Vocal</h3>

                        </div>
                        
                    </div>
                    <div className={style.category__card}>
                        <div id="10"  className={style.category__card__icon} onClick={(e)=>handleClick(e.target.id, "House")}>
                            <h3>House</h3>

                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Category
