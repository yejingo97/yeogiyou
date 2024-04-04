import React from 'react'
import Style from './css/HomeNotice.module.css'
import { Link } from 'react-router-dom'

export default function HomeNotice() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.notice_wrap}>
            <h2 className={Style.contents_title}>NOTICE</h2>
            <div className={Style.notice}>
                <ul className={Style.notice_list}>
                    <li>
                        <span className={Style.new}>N</span>
                        <span className={Style.notice_title}>
                            2월 더블쿠폰 핫세일 더블 페이백 이벤트
                        </span>
                        <span className={Style.notice_date}>2024. 02. 20</span>
                    </li>
                    <li>
                        <span className={Style.notice_title}>
                            2024년 요모조모 아지트 모집 안내
                        </span>
                        <span className={Style.notice_date}>2024. 02. 17</span>
                    </li>
                    <li>
                        <span className={Style.notice_title}>
                            서울상상나라 ‘모두를 응원해’ 전시 연계 이벤트
                        </span>
                        <span className={Style.notice_date}>2024. 01. 10</span>
                    </li>
                    <li>
                        <span className={Style.notice_title}>
                            2024년 서울거리예술창작센터 사업설명회 개최 안내
                        </span>
                        <span className={Style.notice_date}>2024. 01. 05</span>
                    </li>
                </ul>
            </div>
            <button className={Style.notice_add}>
                <Link to={'/notice'}>
                    <i class="fa-solid fa-plus"></i>
                </Link>
            </button>
        </section>
    </div>
  )
}
