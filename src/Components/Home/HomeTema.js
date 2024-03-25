import React from 'react'
import Style from './css/HomeTema.module.css'

export default function Contents() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.hashtack_wrap}>
            <h2 className={Style.contents_title}>
                #여기YOU 해시태그
            </h2>
            <div className={Style.hashtack}>
                <ul className={Style.hashtack_list}>
                    <li>
                        <p className={Style.hashtack_img}> </p>
                        <p className={Style.hashtack_txt}>인기축제</p>
                    </li>
                    <li>
                        <p className={Style.hashtack_img}> </p>
                        <p className={Style.hashtack_txt}>농장체험</p>
                    </li>
                    <li>
                        <p className={Style.hashtack_img}> </p>
                        <p className={Style.hashtack_txt}>캠핑/글램핑</p>
                    </li>
                    <li>
                        <p className={Style.hashtack_img}> </p>
                        <p className={Style.hashtack_txt}>이색데이트</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}
