import React from 'react'
import Style from './css/HomeMVisual.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import '../css/Swiper.css';

export default function HomeMVisual() {
  return (
    <div className={Style.visual_wrap}>
        <nav className={Style.visual}>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img01.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        홍성남당항 새조개축제
                    </p>
                    <p className={Style.visual_txt}>
                        안전한 먹거리 남당항 새조개
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img02.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        우리 댕댕이도 981레이서!
                    </p>
                    <p className={Style.visual_txt}>
                        반려견과 함께 신나는 제주액티비티
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img03.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        구례산수유꽃축제
                    </p>
                    <p className={Style.visual_txt}>
                        영원한 사랑을 찾아서
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img04.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        서울랜드 불빛축제 루나파크
                    </p>
                    <p className={Style.visual_txt}>
                        어둠이 내리면 환상적인 루나파크가 시작된다!
                    </p>
                </SwiperSlide>
            </Swiper>
        </nav>
    </div>
  )
}
