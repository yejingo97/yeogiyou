import React from 'react'
import Style from './css/HomeMTema.module.css'
import { SlArrowDown } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function HomeMTema() {
  return (
    <div className={Style.tema_wrap}>
        <section className={Style.tema}>
            <h2 className={Style.mobile_title}>
                여기YOU 추천 테마축제
            </h2>
            <div className={Style.tema_hashtag}>
                <nav>
                    <ul className={Style.tema_hashtag_list}>
                        <li className={Style.hashtag_selected}>#인기축제</li>
                        <li>#농장체험</li>
                        <li>#캠핑/글램핑</li>
                        <li>#계절축제</li>
                        <li>#식물/수목원</li>
                        <li>#역사/전통</li>
                        <li>#특산물</li>
                        <li>#꽃축제</li>
                        <li>#이색축제</li>
                        <li>#공연/전시</li>
                    </ul>
                </nav>
            </div>
            <div className={Style.tema_hashtag_detail}>
                <nav>
                    <ul className={Style.tema_hashtag_detail_list}>
                        <li>
                            <div className={Style.tema_hashtag_detail_txt}>
                                <p className={Style.tema_hashtag_detail_title}>
                                    # WINTER 액티비티 제대로 즐겨보자
                                </p>
                                <p className={Style.tema_hashtag_detail_icon}>
                                    {/* <SlArrowUp /> */}
                                    <SlArrowDown />
                                </p>
                            </div>
                            <div className={Style.tema_products}>
                                <ul className={Style.tema_products_list}>
                                    <li>
                                        <p className={Style.product_img}>
                                            <img src='../images/mobile_images/tema_img01.jpg' alt='테마이미지01'/>
                                        </p>
                                        <div className={Style.product_txt_box}>
                                            <p className={Style.product_txt}>
                                                스노우 스누피
                                            </p>
                                            <p className={Style.product_intro}>
                                                귀여운 스누피와 함께 즐기는 체험
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <p className={Style.product_img}>
                                            <img src='../images/mobile_images/tema_img02.jpg' alt='테마이미지02'/>
                                        </p>
                                        <div className={Style.product_txt_box}>
                                            <p className={Style.product_txt}>
                                                비발디파크스키장
                                            </p>
                                            <p className={Style.product_intro}>
                                                짜릿하고 즐거운 겨울, NO.1 스키월드!
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={Style.tema_hashtag_detail_txt}>
                                <p className={Style.tema_hashtag_detail_title}>
                                    # 누가 꽃이야? 사진명소 향기로운 꽃축제
                                </p>
                                <p className={Style.tema_hashtag_detail_icon}>
                                    {/* <SlArrowUp /> */}
                                    <SlArrowDown />
                                </p>
                            </div>
                            <div className={Style.tema_products}>
                                <ul className={Style.tema_products_list}>
                                    <li>
                                        <p className={Style.product_img}>
                                            <img src='../images/mobile_images/tema_img03.jpg' alt='테마이미지03'/>
                                        </p>
                                        <div className={Style.product_txt_box}>
                                            <p className={Style.product_txt}>
                                                휴애리 유채꽃 축제
                                            </p>
                                            <p className={Style.product_intro}>
                                                유채꽃밭에서 직접 감상하는 축제
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <p className={Style.product_img}>
                                            <img src='../images/mobile_images/tema_img04.jpg' alt='테마이미지04'/>
                                        </p>
                                        <div className={Style.product_txt_box}>
                                            <p className={Style.product_txt}>
                                                이월드 블라썸 피크닉
                                            </p>
                                            <p className={Style.product_intro}>
                                                국내 최초 보랏빛으로 물드는 벚꽃
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={Style.tema_hashtag_detail_txt}>
                                <p className={Style.tema_hashtag_detail_title}>
                                    # 지역 특산물은 축제 때 먹어야 제맛이지
                                </p>
                                <p className={Style.tema_hashtag_detail_icon}>
                                    {/* <SlArrowUp /> */}
                                    <SlArrowDown />
                                </p>
                            </div>
                            <div className={Style.tema_products}>
                                <ul className={Style.tema_products_list}>
                                    <li>
                                        <p className={Style.product_img}>
                                            <img src='../images/mobile_images/tema_img05.jpg' alt='테마이미지05'/>
                                        </p>
                                        <div className={Style.product_txt_box}>
                                            <p className={Style.product_txt}>
                                                홍성남당항 새조개축제
                                            </p>
                                            <p className={Style.product_intro}>
                                                안전한 먹거리 남당항 새조개
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <p className={Style.product_img}>
                                            <img src='../images/mobile_images/tema_img06.jpg' alt='테마이미지06'/>
                                        </p>
                                        <div className={Style.product_txt_box}>
                                            <p className={Style.product_txt}>
                                                딸기의 하루
                                            </p>
                                            <p className={Style.product_intro}>
                                                직접 수확해서 만들어보는 딸기케익
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={Style.best_more_btn}>
                <Link to={'/mobiletema'}>
                    더 많은 정보 보러가기
                    <span><FaArrowRight/></span>
                </Link>
            </div>
        </section>  
    </div>
  )
}
