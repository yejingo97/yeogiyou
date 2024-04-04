import React, { useEffect, useState } from 'react'
import Style from './css/MobileTemaDetail.module.css'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../api/firebase'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import MobileFooterFix from './MobileFooterFix';
import MobileFooter from './MobileFooter';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import '../../Components/css/Swiper.css';

export default function MobileTemaDetail() {

    const {productId} = useParams('')

    const [selectedItem, setSelectedItem] = useState({})

    useEffect(()=>{
        getProductDetail(productId).then((res)=>{
            setSelectedItem(res)
        })
        window.scrollTo(0,0)
    }, [productId])

  return (
    <div className={Style.temadetail_wrap}>
        <div className={Style.logo_wrap}>
            <div className={Style.back_icon}>
                <Link to={'/mobiletema'}>
                    <IoMdArrowRoundBack/>
                </Link>
            </div>
            <h1 className={Style.mobile_logo}>
                <Link to={'/'}>
                    <img src='../images/logo.png' alt="로고이미지"/>
                </Link>
            </h1>
        </div>
        <div className={Style.temadetail}>
            <div className={Style.temadetail_visual}>
                <Swiper className="mySwiper">
                    <SwiperSlide>
                        <img src={selectedItem.image} alt='메인이미지'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={selectedItem.subImage1} alt='서브이미지01'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={selectedItem.subImage2} alt='서브이미지02'/>
                    </SwiperSlide>
                </Swiper>
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
        <MobileFooter/>
        <MobileFooterFix/>
    </div>
  )
}
