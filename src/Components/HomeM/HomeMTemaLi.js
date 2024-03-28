import React, { useState } from 'react'
import Style from './css/HomeMTemaLi.module.css'
import { SlArrowDown } from "react-icons/sl";

export default function HomeMTemaLi({title, image01, name01, intro01, image02, name02, intro02}) {

    const [isOpen, setIsopen] = useState(false)

    const toggleSelectedLi=()=>{
        setIsopen((prev)=>!prev) //셀렉하면 기존 값의 반대 값으로 바꿔라 true로 변경
    }

    //const 
    // const selectedTemaLi=useRef([])

    // const openTemaItem=()=>{

    // }
  return (
    <li onClick={toggleSelectedLi} className={`${isOpen===true && Style.selected} ${Style.tema_list}`}>
        <div className={Style.tema_hashtag_detail_txt}>
            <p className={Style.tema_hashtag_detail_title}>
                {title}
            </p>
            <p className={Style.tema_hashtag_detail_icon}>
                <SlArrowDown />
            </p>
        </div>
        <div className={Style.tema_products}>
            <ul className={Style.tema_products_list}>
                <li>
                    <p className={Style.product_img}>
                        <img src={image01} alt='테마이미지01'/>
                    </p>
                    <div className={Style.product_txt_box}>
                        <p className={Style.product_txt}>
                            {name01}
                        </p>
                        <p className={Style.product_intro}>
                            {intro01}
                        </p>
                    </div>
                </li>
                <li>
                    <p className={Style.product_img}>
                        <img src={image02} alt='테마이미지02'/>
                    </p>
                    <div className={Style.product_txt_box}>
                        <p className={Style.product_txt}>
                            {name02}
                        </p>
                        <p className={Style.product_intro}>
                            {intro02}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </li>
  )
}
