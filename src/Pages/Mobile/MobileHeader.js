import React, { useEffect, useRef, useState } from 'react'
import Style from './css/MobileHeader.module.css'
import { IoClose } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { gsap } from 'gsap';  
import { Link } from 'react-router-dom';



export default function MobileHeader() {

    const mainMenuList=[
        {index:0, name:'회사소개', path:'/mobilecompany', subMenuList:[{index:0, name:'스토리', path:'/mobilecompany'},{index:1, name:'연혁', path:'/'},{index:2, name:'조직도', path:'/'}]},
        {index:1, name:'테마별축제', path:'/mobiletema', subMenuList:[]},
        {index:2, name:'할인권', path:'/', subMenuList:[]},
        {index:3, name:'공지사항', path:'/', subMenuList:[{index:0, name:'EVENT', path:'/'},{index:1, name:'Q&A', path:'/'},{index:2, name:'자주하는 질문', path:'/'}]}
    ]

    const [activateIndex, setActivateIndex] = useState(null)

    const menuWrap=useRef()
    const menuBtn=useRef()
    const closeBtn=useRef()
    const grayLayer=useRef()

    useEffect(()=>{ //초기설정은 한번만 하면 되기 떄문에 useEffect()
        grayLayer.current.style.display='none'
        menuWrap.current.style.right='-90vw'
        menuWrap.current.style.display='none'
    },[])

    const menuOpen=()=>{
        gsap.set('body,html', {overflow:'hidden'})
        menuWrap.current.style.display='block'
        grayLayer.current.style.display='block'
        gsap.to(menuWrap.current, {right:0, duration:0.5, ease:'power1.out'})
    }
    
    const menuClose=()=>{
        grayLayer.current.style.display='none'
        gsap.to(menuWrap.current, {right:'-90vw', duration:0.5, ease:'power1.out', onComplete:()=>{
            menuWrap.current.style.display='none'
            gsap.set('body,html', {overflow:'visible'})
        }})
        setActivateIndex(null)
    }

  return (
    <header className={Style.mobile_header}>
        <div className={Style.logo_wrap}>
            {/* <div className={Style.back_icon}>
                <Link to={'/mobiletema'}>
                    <IoMdArrowRoundBack/>
                </Link>
            </div> */}
            <h1 className={Style.mobile_logo}>
                <Link to={'/'}>
                    <img src='../images/logo.png' alt="로고이미지"/>
                </Link>
            </h1>
        </div>
        <h2 className={Style.mobile_icon} ref={menuBtn} onClick={menuOpen}>
            <IoMenu/>
        </h2>
        <div className={Style.mobile_inner} ref={menuWrap}>
            <div className={Style.close_btn} ref={closeBtn} onClick={menuClose}>
                <IoClose/>
            </div>
            <ul className={Style.loginmenu_list}>
                <li>회원가입</li>
                <li>로그인</li>
            </ul>
            <div className={Style.mainmenu}>
                <ul className={Style.mainmenu_list}>
                    {
                        mainMenuList.map((item)=>(
                            <li key={item.index} className={`${item.index===activateIndex && Style.selected}`} style={item.index===activateIndex ? {height:60+(60*item.subMenuList.length)} : {height:60}} onClick={()=>{
                                setActivateIndex(item.index!==activateIndex ? item.index : null)
                            }}>
                                {
                                    item.subMenuList.length < 1 ?
                                    <>
                                        <Link to={item.path}>
                                            {item.name}
                                        </Link>
                                    </>
                                    :
                                    <>
                                        {item.name}
                                        <span className={Style.mainmenu_btn}>
                                            <IoIosArrowUp/>
                                        </span>
                                        <ul className={Style.submenu_list}>
                                            {
                                                item.subMenuList.map((item)=>(
                                                    <Link to={item.path}>
                                                        <li onClick={menuClose}>
                                                            {item.name}
                                                        </li>
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </>
                                }

                            {/* <ul className={Style.submenu_list}>
                                <li>스토리</li>
                                <li>연혁</li>
                                <li>조직도</li>
                            </ul> */}
                            </li>
                        ))
                    }
                    {/* <li>회사소개
                        <span className={Style.mainmenu_btn}>
                            <IoIosArrowUp/>
                        </span>
                        <ul className={Style.submenu_list}>
                            <li>스토리</li>
                            <li>연혁</li>
                            <li>조직도</li>
                        </ul>
                    </li>
                    <li>테마별축제
                        <span className={Style.mainmenu_btn}>
                            <IoIosArrowUp/>
                        </span>
                    </li>
                    <li>할인권
                        <span className={Style.mainmenu_btn}>
                            <IoIosArrowUp/>
                        </span>
                    </li>
                    <li>공지사항
                        <span className={Style.mainmenu_btn}>
                            <IoIosArrowUp/>
                        </span>
                        <ul className={Style.submenu_list}>
                            <li>EVENT</li>
                            <li>Q&A</li>
                            <li>자주하는 질문</li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </div>
        <div className={Style.mobile_grayLayer} ref={grayLayer}></div>
    </header>
  )
}
