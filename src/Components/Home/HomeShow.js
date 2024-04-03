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
                    <p className={Style.show_main_title}>
                        박물관에 놀러간 라이언과 춘식이,<br/>
                         ‘본태박물관 카카오프렌즈 특별전’
                    </p>
                    <p className={Style.show_main_intro}>
                        온라인 공간을 넘어 오프라인 공간으로 영역을 넓혀가는 카카오프렌즈가 제주도 본태박물관과 함께 ‘본태박물관 카카오프렌즈 특별전’을 오는 2월 29일(목)까지 진행한다.
                    </p>
                    <button className={Style.show_more_btn}>
                        more
                    </button>
                </div>
                <div className={Style.show_sub}>
                    <ul className={Style.show_sub_list}>
                        <li>
                            <p className={Style.show_sub_img}>
                                <img src='/images/main_show02.jpg' alt=''/>
                            </p>
                            <div className={Style.show_sub_txt_box}>
                                <p className={Style.show_sub_title}>
                                    '2024 코리아그랜드세일' 방한객 12만명 유치…역대 최대
                                </p>
                                <p className={Style.show_sub_intro}>
                                문화체육관광부와 한국방문의해위원회가 '2024 코리아그랜드세일'을 통해 외국인 관광객 12만명을 유치했다.
                                </p>
                                <button className={Style.show_more_btn}>
                                    more
                                </button>
                            </div>
                        </li>
                        <li>
                            <p className={Style.show_sub_img}>
                                <img src='/images/main_show03.jpg' alt=''/>
                            </p>
                            <div className={Style.show_sub_txt_box}>
                                <p className={Style.show_sub_title}>
                                    ‘정월 대보름, 창경궁에서 바라본 보름달’ 행사 진행
                                </p>
                                <p className={Style.show_sub_intro}>
                                이번 행사에서는 풍기대 주변에 대형 보름달 모형을 설치하여 오후 6시부터 8시 30분까지 관람객이 사진 촬영을 할 수 있도록 운영하였다.
                                </p>
                                <button className={Style.show_more_btn}>
                                    more
                                </button>
                            </div>
                        </li>
                        <li>
                            <p className={Style.show_sub_img}>
                                <img src='/images/main_show04.jpg' alt=''/>
                            </p>
                            <div className={Style.show_sub_txt_box}>
                                <p className={Style.show_sub_title}>
                                    '워너브라더스 100주년 특별전’, 꿈과 환상을 현실로 만들어내다
                                </p>
                                <p className={Style.show_sub_intro}>
                                동대문디자인플라자 (DDP)에서 진행되는 ‘’워너브라더스 100주년 특별전’은 ‘해리포터’, ‘톰과 제리’, ’루니 툰’, ‘배트맨’, ‘프렌즈’ 등 워너브라더스의 명작들의 제작 과정을 담은 영상자료와 미디어아트로 구성된 전시회다.
                                </p>
                                <button className={Style.show_more_btn}>
                                    more
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}
