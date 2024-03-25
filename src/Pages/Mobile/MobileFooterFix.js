import React from 'react'
import Style from './css/MobileFooterFix.module.css'
import { IoMenu } from "react-icons/io5";
import { HiMapPin } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

export default function MobileFooterFix() {
  return (
    <div className={Style.fixfooter_wrap}>
        <div className={Style.fixfooter}>
            <ul className={Style.fixfooter_list}>
                <li>
                    <p className={Style.fixfooter_icon}>
                        <IoMenu/>
                    </p>
                    <p className={Style.fixfooter_text}>
                        카테고리
                    </p>
                </li>
                <li>
                    <p className={Style.fixfooter_icon}>
                        <HiMapPin/>
                    </p>
                    <p className={Style.fixfooter_text}>
                        내주변
                    </p>
                </li>
                <li>
                    <p className={Style.fixfooter_logo}>
                        <img src='/images/mobile_images/menu_logo_img.jpg' alt='로고이미지'/>
                    </p>
                </li>
                <li>
                    <p className={Style.fixfooter_icon}>
                        <IoSearch/>
                    </p>
                    <p className={Style.fixfooter_text}>
                        검색
                    </p>
                </li>
                <li>
                    <p className={Style.fixfooter_icon}>
                        <FaUser/>
                    </p>
                    <p className={Style.fixfooter_text}>
                        마이페이지
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}
