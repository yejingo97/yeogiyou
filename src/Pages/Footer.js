import React from 'react'
import Style from './css/Footer.module.css'

export default function Footer() {
  return (
    <div className={Style.footer_wrap}>
        <footer>
            <h2 className='hidden'>하단영역</h2>
            <div className={Style.footer_left}>
                <div className={Style.footer_terms}>
                    <span className={Style.footer_terms01}>이용약관</span>
                    <span className={Style.footer_terms02}>개인정보처리방침</span>
                </div>
                <div className={Style.footer_address}>
                    <p>
                        충남 당진시 당진중앙2로 188 인제빌딩 3층<span>사업자등록번호 313-03-89014</span><br/>
                        대표 박상원<br/>
                        대표번호 041-358-7024<span>E-Mail yeogiyou@naver.com</span><br/>
                        Copyright © 여기유. All Rights Reserved.
                    </p>
                </div>
            </div>
            <div className={Style.footer_right}>
                <p className={Style.inquiry_title}>
                    도와드릴까요?<br/>
                    041-358-7024
                </p>
                <p className={Style.inquiry_txt}>
                    운영시간안내<br/>
                    평일 09 - 18시(토, 일 공휴일 휴무)
                </p>
            </div>
        </footer>
    </div>
  )
}
