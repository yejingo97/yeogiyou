import React from 'react'
import Style from './css/HomeTema.module.css'
import { Link } from 'react-router-dom'

export default function Contents() {
    window.scrollTo(0,0)
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.hashtack_wrap}>
            <h2 className={Style.contents_title}>
                #여기YOU 해시태그
            </h2>
            <div className={Style.hashtack}>
                <ul className={Style.hashtack_list}>
                    <li>
                        <Link to={'/tema'}>
                            <p className={Style.hashtack_img}> </p>
                            <p className={Style.hashtack_txt}>인기축제</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/tema'}>
                            <p className={Style.hashtack_img}> </p>
                            <p className={Style.hashtack_txt}>농장체험</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/tema'}>
                            <p className={Style.hashtack_img}> </p>
                            <p className={Style.hashtack_txt}>캠핑/글램핑</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/tema'}>
                            <p className={Style.hashtack_img}> </p>
                            <p className={Style.hashtack_txt}>이색데이트</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}
