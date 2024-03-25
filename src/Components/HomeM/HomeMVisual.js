import React from 'react'
import Style from './css/HomeMVisual.module.css'

export default function HomeMVisual() {
  return (
    <div className={Style.visual_wrap}>
        <nav className={Style.visual}>
            <ul className={Style.visual_list}>
                <li>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img01.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        홍성남당항 새조개축제
                    </p>
                    <p className={Style.visual_txt}>
                        안전한 먹거리 남당항 새조개
                    </p>
                </li>
                <li>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img02.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        홍성남당항 새조개축제
                    </p>
                    <p className={Style.visual_txt}>
                        안전한 먹거리 남당항 새조개
                    </p>
                </li>
                <li>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img03.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        홍성남당항 새조개축제
                    </p>
                    <p className={Style.visual_txt}>
                        안전한 먹거리 남당항 새조개
                    </p>
                </li>
                <li>
                    <p className={Style.visual_img}>
                        <img src='../images/mobile_images/visual_img04.jpg' alt='비주얼이미지01'/>
                    </p>
                    <p className={Style.visual_title}>
                        홍성남당항 새조개축제
                    </p>
                    <p className={Style.visual_txt}>
                        안전한 먹거리 남당항 새조개
                    </p>
                </li>
            </ul>
        </nav>
        <div className={Style.visual_num}>
                1 / 4
        </div>
    </div>
  )
}
