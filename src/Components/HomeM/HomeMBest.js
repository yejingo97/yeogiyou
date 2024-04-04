import React from 'react'
import Style from './css/HomeMBest.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function HomeMBest() {
  return (
    <div className={Style.best_wrap}>
        <div className={Style.best_bg}></div>
        <section className={Style.best}>
            <h2 className={Style.mobile_title}>
                조회수가 가장많은<br/>
                BEST 축제 여기YOU
            </h2>
            <div className={Style.best}>
                <ul className={Style.best_list}>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img01.jpg' alt='베스트상품01'/>
                        </p>
                        <p className={Style.best_product_title}>
                            스노우 스누피
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #계절축제 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img02.jpg' alt='베스트상품02'/>
                        </p>
                        <p className={Style.best_product_title}>
                            휴애리 유채꽃 축제
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #꽃축제 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img03.jpg' alt='베스트상품03'/>
                        </p>
                        <p className={Style.best_product_title}>
                            딸기의 하루
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #농장체험 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img04.jpg' alt='베스트상품04'/>
                        </p>
                        <p className={Style.best_product_title}>
                            한국의 집 고호재
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #역사/전통 #문화적인
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img05.jpg' alt='베스트상품05'/>
                        </p>
                        <p className={Style.best_product_title}>
                            가평자두체험농장
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #농장체험 #먹거리
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img06.jpg' alt='베스트상품06'/>
                        </p>
                        <p className={Style.best_product_title}>
                            춘식이 with 본태박물관
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #공연/전시 #이색데이트
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <div className={Style.best_more_btn}>
            <Link to={'/mobiletema'}>
            더 많은 정보 보러가기
            <span><FaArrowRight/></span>
            </Link>
        </div>
    </div>
  )
}
