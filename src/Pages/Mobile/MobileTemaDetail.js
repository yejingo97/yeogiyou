import React, { useEffect, useState } from 'react'
import Style from './css/MobileTemaDetail.module.css'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../api/firebase'

export default function MobileTemaDetail() {

    const {productId} = useParams('')

    const [selectedItem, setSelectedItem] = useState({})

    useEffect(()=>{
        getProductDetail(productId).then((res)=>{
            setSelectedItem(res)
        })
    }, [productId])

  return (
    <div className={Style.temadetail_wrap}>
        <div className={Style.temadetail}>
            <div className={Style.temadetail_visual}>
                <ul className={Style.temadetail_visual_list}>
                    <li>
                        <img src={selectedItem.image} alt='스노우스누피이미지01'/>
                    </li>
                    <li>
                        <img src={selectedItem.subImage1} alt='스노우스누피이미지02'/>
                    </li>
                    <li>
                        <img src={selectedItem.subImage2} alt='스노우스누피이미지03'/>
                    </li>
                </ul>
            </div>
            <div className={Style.temadetail_txt}>
                <p className={Style.temadetail_category}>{selectedItem.category}</p>
                <p className={Style.temadetail_title}>{selectedItem.name}</p>
                <div className={Style.temadetail_date}>
                    <p className={Style.temadetail_date_title}>행사일정</p>
                    <p className={Style.temadetail_date_txt}>
                        {selectedItem.date}
                    </p>
                </div>
                <div className={Style.temadetail_place}>
                    <p className={Style.temadetail_place_title}>행사장소</p>
                    <p className={Style.temadetail_place_txt}>
                        {selectedItem.place}
                    </p>
                </div>
                <div className={Style.temadetail_intro}>
                    <p className={Style.temadetail_intro_title}>행사정보</p>
                    <p className={Style.temadetail_intro_txt}>
                        {selectedItem.information}
                    </p>
                </div>
                <div className={Style.temadetail_price}>
                    <p className={Style.temadetail_price_title}>입장료</p>
                    <p className={Style.temadetail_price_txt}>
                        {selectedItem.admission}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
