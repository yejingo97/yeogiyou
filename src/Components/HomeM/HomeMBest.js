import React from 'react'
import Style from './css/HomeMBest.module.css'
import { FaArrowRight } from "react-icons/fa6";

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
                            #키즈 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img01.jpg' alt='베스트상품02'/>
                        </p>
                        <p className={Style.best_product_title}>
                            스노우 스누피
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #키즈 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img01.jpg' alt='베스트상품03'/>
                        </p>
                        <p className={Style.best_product_title}>
                            스노우 스누피
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #키즈 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img01.jpg' alt='베스트상품04'/>
                        </p>
                        <p className={Style.best_product_title}>
                            스노우 스누피
                        </p>
                        <p className={Style.bedt_product_hashtag}>
                            #키즈 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img01.jpg' alt='베스트상품05'/>
                        </p>
                        <p className={Style.best_product_title}>
                            스노우 스누피
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #키즈 #이색데이트
                        </p>
                    </li>
                    <li>
                        <p className={Style.best_product_img}>
                            <img src='../images/mobile_images/best_img01.jpg' alt='베스트상품06'/>
                        </p>
                        <p className={Style.best_product_title}>
                            스노우 스누피
                        </p>
                        <p className={Style.best_product_hashtag}>
                            #키즈 #이색데이트
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <div className={Style.best_more_btn}>
            더 많은 정보 보러가기
            <span><FaArrowRight/></span>
        </div>
    </div>
  )
}
