import React from 'react'
import Style from './css/MobileFooter.module.css'
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function MobileFooter() {
    return (
        <footer className={Style.footer_wrap}>
            <div className={Style.footer}>
                <ul className={Style.footer_sns_list}>
                    <li><FaFacebookF/></li>
                    <li><BsInstagram/></li>
                    <li><FaYoutube/></li>
                    <li><RiKakaoTalkFill/></li>
                </ul>
                <div className={Style.call}>
                    <p className={Style.call_title}>
                        도와드릴까요?
                    </p>
                    <p className={Style.call_num}>041-358-7024</p>
                    <p>
                        운영시간안내<br/>
                        평일 09 - 18시(토, 일 공휴일 휴무)
                    </p>
                </div>
                {/* <div className={Style.footer_tabmenu}>
                    <ul className={Style.footer_tabmenu_list}>
                        <li>로그인</li>
                        <li>공지사항</li>
                        <li>고객센터</li>
                    </ul>
                </div> */}
                <div className={Style.copyright}>
                    충남 당진시 당진중앙2로 188 인제빌딩 3층<br/>
                    사업자등록번호 313-03-89014<br/>
                    대표 박상원<br/>
                    Copyright © 여기유. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
