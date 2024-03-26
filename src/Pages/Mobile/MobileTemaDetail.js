import React from 'react'
import Style from './css/MobileTemaDetail.module.css'

export default function MobileTemaDetail() {
  return (
    <div className={Style.temadetail_wrap}>
        <div className={Style.temadetail}>
            <div className={Style.temadetail_visual}>
                <ul className={Style.temadetail_visual_list}>
                    <li>
                        <img src='../images/mobile_images/snowsnoopy_main01.jpg' alt='스노우스누피이미지01'/>
                    </li>
                    <li>
                        {/* <img src='../images/mobile_images/snowsnoopy_main02.jpg' alt='스노우스누피이미지02'/> */}
                    </li>
                    <li>
                        {/* <img src='../images/mobile_images/snowsnoopy_main03.jpg' alt='스노우스누피이미지03'/> */}
                    </li>
                </ul>
            </div>
            <div className={Style.temadetail_txt}>
                <p className={Style.temadetail_category}>액티비티</p>
                <p className={Style.temadetail_title}>스노우 스누피</p>
                <div className={Style.temadetail_date}>
                    <p className={Style.temadetail_date_title}>행사일정</p>
                    <p className={Style.temadetail_date_txt}>
                        2023.12.10 ~ 2024.03.31
                    </p>
                </div>
                <div className={Style.temadetail_place}>
                    <p className={Style.temadetail_place_title}>행사장소</p>
                    <p className={Style.temadetail_place_txt}>
                        강원 평창군 봉평면 태기로 174 스노우 스누피
                    </p>
                </div>
                <div className={Style.temadetail_intro}>
                    <p className={Style.temadetail_intro_title}>행사정보</p>
                    <p className={Style.temadetail_intro_txt}>
                        피너츠 친구들은 눈, 비, 바람, 낙엽과 같은 자연환경과 계절의 변화를 경험하면서 인생의 의미를 찾고 성장합니다. 겨울 분위기에서 만나는 피너츠 친구들과 함께 떠나보는 WINTER GARDEN
                    </p>
                </div>
                <div className={Style.temadetail_price}>
                    <p className={Style.temadetail_price_title}>입장료</p>
                    <p className={Style.temadetail_price_txt}>
                        성인 18,000원 / 청소년 15,000원 / 소인 13,000원 *36개월 미만 무료 입장
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
