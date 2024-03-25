import React from 'react'
import Style from './css/HomeSearch.module.css'

export default function HomeSearch() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.search_wrap}>
            <h2 className={Style.search_title}>축제 검색하기</h2>
            <div className={Style.search}>
                <ul className={Style.search_hashtack_list}>
                    <li>#서산축제</li>
                    <li>#일출, 일몰명소</li>
                    <li>#강릉 아르떼뮤지엄</li>
                    <li>#데이트 명소</li>
                    <li>#아이랑 당진축제</li>
                    <li>#전시회 추천</li>
                </ul>
                <div className={Style.search_box}>
                    <p className={Style.search_ex}>
                        <input type="text" placeholder="이월드 블라썸 피크닉"/>
                    </p>
                    <p className={Style.search_icon}>
                        <img src='/images/main_search_icon.png' alt="돋보기아이콘"/>
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}
