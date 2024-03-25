import React from 'react'
import Style from './css/Visualsub.module.css'

export default function Visualsub() {
  return (
    <div className={Style.visual_wrap}>
        <h2 className='hidden'>서브페이지비주얼영역</h2>
        <div className={Style.visual_bar}>
            bar
        </div>
        <div className={Style.visual}>
            <p className={Style.visual_title}>
                테마별 축제
            </p>
            <p className={Style.visual_txt}>
                다채로운 즐거움이 가득한 대한민국 여기저기 추천 테마축제
            </p>
        </div>
    </div>
  )
}
