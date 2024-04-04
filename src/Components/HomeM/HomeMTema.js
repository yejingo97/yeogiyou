import React from 'react'
import Style from './css/HomeMTema.module.css'

import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HomeMTemaLi from './HomeMTemaLi';

export default function HomeMTema() {
    const initTema=[
        {index:0, title:"# WINNTER 액티비티 제대로 즐겨보자", image01:'../images/mobile_images/tema_img01.jpg', name01:"스노우 스누피", intro01:"귀여운 스누피와 함께 즐기는 체험", image02:'../images/mobile_images/tema_img02.jpg', name02:"비발디파크스키장", intro02:"짜릿하고 즐거운 겨울, NO.1 스키월드!"},
        {index:1, title:"# 누가 꽃이야? 사진명소 향기로운 꽃축제", image01:'../images/mobile_images/tema_img03.jpg', name01:"휴애리 유채꽃 축제", intro01:"유채꽃밭에서 직접 감상하는 축제", image02:'../images/mobile_images/tema_img04.jpg', name02:"이월드 블라썸 피크닉", intro02:"국내 최초 보랏빛으로 물드는 벚꽃"},
        {index:2, title:"# 지역 특산물은 축제 때 먹어야 제맛이지", image01:'../images/mobile_images/tema_img05.jpg', name01:"홍성남당항 새조개축제", intro01:"안전한 먹거리 남당항 새조개", image02:'../images/mobile_images/tema_img06.jpg', name02:"딸기의 하루", intro02:"직접 수확해서 만들어보는 딸기케익"},
        {index:3, title:"# 운치있는 쉼, 오랜 전통이 있는 한옥", image01:'../images/mobile_images/tema_img07.jpg', name01:"한국의 집 고호재", intro01:"한국의집 프리미엄 궁중다과 고호재", image02:'../images/mobile_images/tema_img08.jpg', name02:"문경새재 문화재야행", intro02:"과거와 현재가 공존하는 문경새재"}
    ]
  return (
    <div className={Style.tema_wrap}>
        <section className={Style.tema}>
            <h2 className={Style.mobile_title}>
                여기YOU 추천 테마축제
            </h2>
            <div className={Style.tema_hashtag_detail}>
                <nav>
                    <ul className={Style.tema_hashtag_detail_list}>
                        {
                            initTema.map((item)=>{
                                return (
                                    <HomeMTemaLi title={item.title} image01={item.image01} name01={item.name01} intro01={item.intro01} image02={item.image02} name02={item.name02} intro02={item.intro02} />
                                )
                            })
                        }
                    </ul>
                </nav>
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
