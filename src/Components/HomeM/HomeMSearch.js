import React from 'react'
import Style from './css/HomeMSearch.module.css'

export default function HomeMSearch() {
  return (
    <div className={Style.search_wrap}>
        <div className={Style.search}>
            <input type="text" placeholder="어떤 축제를 찾으세요?"/>
            <p className={Style.search_icon}>
                <img src='/images/main_search_icon.png' alt="돋보기아이콘"/>
            </p>
        </div>
    </div>
  )
}
