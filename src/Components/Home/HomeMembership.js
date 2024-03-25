import React from 'react'
import Style from './css/HomeMembership.module.css'

export default function HomeMembership() {
  return (
    <div className={Style.contents_wrap}>
        <div className={Style.membership_bg}>
            <p className={Style.membership_title}>멤버십 EVENT</p>
            <p className={Style.membership_txt}>
              다양한 혜택으로 가득한 여행가는 달과 함께<br/>설레임을 가득 안고 여행을 떠나보세요.
            </p>
        </div>
        <section className={Style.membership_wrap}>
            <h2 className='hidden'>멤버십이벤트영역</h2>
            <div className={Style.membership}>
                <ul className={Style.membership_list}>
                    <li>
                        <p className={Style.membership_img}>img</p>
                    </li>
                    <li>
                        <p className={Style.membership_img}>img</p>
                    </li>
                    <li>
                        <p className={Style.membership_img}>img</p>
                    </li>
                    <li>
                        <p className={Style.membership_img}>img</p>
                    </li>
                    <li>
                        <p className={Style.membership_img}>img</p>
                    </li>
                </ul>
            </div>
            <button className={Style.membership_left_btn}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button className={Style.membership_right_btn}>
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </section>
    </div>
  )
}
