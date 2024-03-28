import React from 'react'
import Style from './css/HomeShow.module.css'

export default function HomeShow() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.show_wrap}>
            <h2 className={Style.contents_title}>
                인기상승 공연/전시
            </h2>
            <div className={Style.show}>
                <div className={Style.show_main}>
                    <p className={Style.show_main_img}>
                        <img src='/images/main_show01.jpg' alt=''/>
                    </p>
                    <p className={Style.show_title}>
                        박물관에 놀러간 라이언과 춘식이,<br/>
                         ‘본태박물관 카카오프렌즈 특별전’
                    </p>
                    <p className={Style.show_intro}>
                        온라인 공간을 넘어 오프라인 공간으로 영역을 넓혀가는 카카오프렌즈가 제주도 본태박물관과 함께 ‘본태박물관 카카오프렌즈 특별전’을 오는 2월 29일(목)까지 진행한다.
                    </p>
                    <button className={Style.show_more_btn}>
                        more
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}
