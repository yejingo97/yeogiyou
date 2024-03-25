import React from 'react'
import Style from './css/Visual.module.css'

// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './css/Swiper.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function Visual() {
  return (
    <div className={Style.visual_wrap}>
        <h2 className='hidden'>비주얼영역</h2>
        <div className={Style.visual_bar}>
            bar
        </div>
        <div className={Style.visual}>
            <Swiper 
                pagination={{type: 'progressbar',}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id={Style.visual_01} className={Style.visual_in}>
                        <div className={Style.visual_center}>
                            <section className={Style.visual_txt}>
                                <h2 className='hidden'>비주얼01</h2>
                                <p className={Style.visual_data}>
                                    2024. 01. 03 ~ 03. 29
                                    <span className={Style.visual_data_ing}>
                                        행사중
                                    </span>
                                </p>
                                <p className={Style.visual_area}>
                                    충청남도 홍성군
                                </p>
                                <p className={Style.visual_title}>
                                    홍성남당항 새조개축제
                                </p>
                                <p className={Style.visual_intro}>
                                    안전한 먹거리 남당항 새조개 홍성남당항 새조개축제
                                </p>
                                <p className={Style.visual_more_btn}>
                                    자세히 보러가기
                                </p>
                                <p className={Style.visual_sns}>
                                    홈페이지
                                </p>
                            </section>
                            <div className={Style.visual_img}>
                                <img src='/images/visual01_img.jpg' alt='비주얼이미지01'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id={Style.visual_02} className={Style.visual_in}>
                        <div className={Style.visual_center}>
                            <section className={Style.visual_txt}>
                                <h2 className='hidden'>비주얼02</h2>
                                <p className={Style.visual_data}>
                                    2024. 01. 03 ~ 03. 29
                                    <span className={Style.visual_data_ing}>
                                        행사중
                                    </span>
                                </p>
                                <p className={Style.visual_area}>
                                    제주특별자치도 제주시
                                </p>
                                <p className={Style.visual_title}>
                                    우리 댕댕이도 981레이서!
                                </p>
                                <p className={Style.visual_intro}>
                                    반려견과 함께 신나는 제주액티비티
                                </p>
                                <p className={Style.visual_more_btn}>
                                    자세히 보러가기
                                </p>
                                <p className={Style.visual_sns}>
                                    홈페이지
                                </p>
                            </section>
                            <div className={Style.visual_img}>
                                <img src='/images/visual02_img.jpg' alt='비주얼이미지02'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id={Style.visual_03} className={Style.visual_in}>
                        <div className={Style.visual_center}>
                            <section className={Style.visual_txt}>
                                <h2 className='hidden'>비주얼03</h2>
                                <p className={Style.visual_data}>
                                    2024. 01. 03 ~ 03. 29
                                    <span className={Style.visual_data_ing}>
                                        행사중
                                    </span>
                                </p>
                                <p className={Style.visual_area}>
                                    전라남도 구례군
                                </p>
                                <p className={Style.visual_title}>
                                    구례산수유꽃축제
                                </p>
                                <p className={Style.visual_intro}>
                                    영원한 사랑을 찾아서
                                </p>
                                <p className={Style.visual_more_btn}>
                                    자세히 보러가기
                                </p>
                                <p className={Style.visual_sns}>
                                    홈페이지
                                </p>
                            </section>
                            <div className={Style.visual_img}>
                                <img src='/images/visual03_img.jpg' alt='비주얼이미지03'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id={Style.visual_04} className={Style.visual_in}>
                        <div className={Style.visual_center}>
                            <section className={Style.visual_txt}>
                                <h2 className='hidden'>비주얼04</h2>
                                <p className={Style.visual_data}>
                                    2024. 01. 03 ~ 03. 29
                                    <span className={Style.visual_data_ing}>
                                        행사중
                                    </span>
                                </p>
                                <p className={Style.visual_area}>
                                    경기도 과천시
                                </p>
                                <p className={Style.visual_title}>
                                    서울랜드 불빛축제 루나파크
                                </p>
                                <p className={Style.visual_intro}>
                                    어둠이 내리면 환상적인 루나파크가 시작된다!
                                </p>
                                <p className={Style.visual_more_btn}>
                                    자세히 보러가기
                                </p>
                                <p className={Style.visual_sns}>
                                    홈페이지
                                </p>
                            </section>
                            <div className={Style.visual_img}>
                                <img src='/images/visual04_img.jpg' alt='비주얼이미지04'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <button className={Style.visual_left_btn}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button className={Style.visual_right_btn}>
                <i class="fa-solid fa-chevron-right"></i>
            </button> */}
        </div>
    </div>
  )
}
