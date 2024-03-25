import React from 'react'
import Style from './css/HomeFavored.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/Swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Home_Contents2() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.favored_wrap}>
            <h2 className={Style.contents_title}>
            테마별 인기축제
            </h2>
            <div className={Style.favored}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className={Style.favored_inner}>
                            <div className={Style.favored_bg_img01}>
                                <div className={Style.favored_box}>
                                    <div className={Style.favored_txt_box}>
                                        <p className={Style.favored_tema}>
                                            계절축제
                                        </p>
                                        <p className={Style.favored_title}>
                                            눈꽃겨울힐링레저
                                        </p>
                                        <p className={Style.favored_intro}>
                                            올 겨울 즐기기 딱 좋은 힐링스팟! 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.favored_01}>
                                <p className={Style.favored_01_img}>
                                    <img src='/images/favored_title_01_img01.jpg' alt='테마별인기축제01_01'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    스노우 스누피 <span>(강원도 평창군)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    겨울 분위기 속 귀여운 스누피와 함께 즐기는 체험
                                </p>
                            </div>
                            <div className={Style.favored_02}>
                                <p className={Style.favored_02_img}>
                                    <img src='/images/favored_title_01_img02.jpg' alt='테마별인기축제01_02'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    비발디파크스키장 <span>(강원도 홍천군)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    짜릿하고 즐거운 겨울, 국내 NO.1 스키월드!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.favored_inner}>
                            <div className={Style.favored_bg_img02}>
                                <div className={Style.favored_box}>
                                    <div className={Style.favored_txt_box}>
                                        <p className={Style.favored_tema}>
                                            꽃축제
                                        </p>
                                        <p className={Style.favored_title}>
                                            꽃내음 가득 봄나들이
                                        </p>
                                        <p className={Style.favored_intro}>
                                            향기로운 꽃밭에서 맞이하는 봄날
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.favored_01}>
                                <p className={Style.favored_01_img}>
                                    <img src='/images/favored_title_02_img01.jpg' alt='테마별인기축제02_01'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    휴애리 유채꽃 축제 <span>(제주도 서귀포시)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                한라산이 보이는 유채꽃밭에서 직접 감상하는 축제
                                </p>
                            </div>
                            <div className={Style.favored_02}>
                                <p className={Style.favored_02_img}>
                                    <img src='/images/favored_title_02_img02.jpg' alt='테마별인기축제02_02'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    이월드 블라썸 피크닉 <span>(대구광역시 달서구)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    국내 최초 보랏빛으로 물드는 이월드 벚꽃 보라해
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.favored_inner}>
                            <div className={Style.favored_bg_img03}>
                                <div className={Style.favored_box}>
                                    <div className={Style.favored_txt_box}>
                                        <p className={Style.favored_tema}>
                                            농장체험
                                        </p>
                                        <p className={Style.favored_title}>
                                            오늘은 내가 딸기농부
                                        </p>
                                        <p className={Style.favored_intro}>
                                            딸기밭을 배경으로 사진도 찍고 수확도 하고!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.favored_01}>
                                <p className={Style.favored_01_img}>
                                    <img src='/images/favored_title_03_img01.jpg' alt='테마별인기축제03_01'/>   
                                </p>
                                <p className={Style.favored_in_title}>
                                    논산딸기축제 <span>(충청남도 논산시)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    논산딸기와 사랑에 빠지다!
                                </p>
                            </div>
                            <div className={Style.favored_02}>
                                <p className={Style.favored_02_img}>
                                    <img src='/images/favored_title_03_img02.jpg' alt='테마별인기축제03_02'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    딸기의 하루 <span>(인천 남동구)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    직접 수확해서 만들어보는 딸기생크림케익
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Style.favored_inner}>
                            <div className={Style.favored_bg_img04}>
                                <div className={Style.favored_box}>
                                    <div className={Style.favored_txt_box}>
                                        <p className={Style.favored_tema}>
                                            역사/전통
                                        </p>
                                        <p className={Style.favored_title}>
                                            운지있는 쉼, 한옥
                                        </p>
                                        <p className={Style.favored_intro}>
                                            오랜 전통의 미를 간직한 한옥마을에서 힐링여행
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.favored_01}>
                                <p className={Style.favored_01_img}>
                                    <img src='/images/favored_title_04_img01.jpg' alt='테마별인기축제04_01'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    한국의 집 고호재 <span>(서울특별시 중구)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    한국의 집 프리미엄 궁중다과 고호재
                                </p>
                            </div>
                            <div className={Style.favored_02}>
                                <p className={Style.favored_02_img}>
                                    <img src='/images/favored_title_04_img02.jpg' alt='테마별인기축제04_02'/>
                                </p>
                                <p className={Style.favored_in_title}>
                                    문경새재 문화재야행 <span>(경상북도 문경시)</span>
                                </p>
                                <p className={Style.favored_in_txt}>
                                    과거와 현재가 공존하는 문경새재에서 펼쳐지는 축제
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
