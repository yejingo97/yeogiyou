import React from 'react'
import Style from './css/HomeShow.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../css/Swiper.css';

export default function HomeShow() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.show_wrap}>
            <h2 className={Style.contents_title}>
                인기상승 공연/전시
            </h2>
            <div className={Style.show}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={Style.show_inner}>
                            <div className={Style.show_img}>
                                <img src='/images/show_img01.jpg' alt='공연전시이미지01'/>
                            </div>
                            <div className={Style.show_txt_box}>
                                <p className={Style.show_tema}>
                                    공연/전시
                                </p>
                                <p className={Style.show_title}>
                                    춘식이 with 본태박물관
                                </p>
                                <p className={Style.show_intro}>
                                    춘식이와 함께 즐기는 전시
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.show_inner}>
                            <div className={Style.show_img}>
                                <img src='/images/show_img02.jpg' alt='공연전시이미지02'/>
                            </div>
                            <div className={Style.show_txt_box}>
                                <p className={Style.show_tema}>
                                    공연/전시
                                </p>
                                <p className={Style.show_title}>
                                    2024 코리아그랜드세일
                                </p>
                                <p className={Style.show_intro}>
                                    한국에서의 특별한 순간, 웰컴센터와 함께!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.show_inner}>
                            <div className={Style.show_img}>
                                <img src='/images/show_img03.jpg' alt='공연전시이미지03'/>
                            </div>
                            <div className={Style.show_txt_box}>
                                <p className={Style.show_tema}>
                                    공연/전시
                                </p>
                                <p className={Style.show_title}>
                                    창경궁에서 바라본 보름달
                                </p>
                                <p className={Style.show_intro}>
                                    정월대보름 창경궁에서 바라보는 보름달
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.show_inner}>
                            <div className={Style.show_img}>
                                <img src='/images/show_img04.jpg' alt='공연전시이미지04'/>
                            </div>
                            <div className={Style.show_txt_box}>
                                <p className={Style.show_tema}>
                                    공연/전시
                                </p>
                                <p className={Style.show_title}>
                                    워너브라더스 100주년 특별전
                                </p>
                                <p className={Style.show_intro}>
                                전 세계 트렌드를 주도한 워너브라더스의 100주년 기념 대규모 특별전
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* <button className={Style.favored_left_btn}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button className={Style.favored_right_btn}>
                <i class="fa-solid fa-chevron-right"></i>
            </button> */}
        </section>
    </div>
  )
}
