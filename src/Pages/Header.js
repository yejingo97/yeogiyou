import React, { useRef, useState } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Header() {

    const initMenus=[
        {index:0, text:"회사소개", path:'./company', subMenuList:[{index:0, text:"스토리", path:'./company'},{index:1, text:"연혁", path:'./history'},{index:2, text:"조직도", path:'./group'}]},
        {index:1, text:"테마별축제", path:'./tema', subMenuList:[]},
        {index:2, text:"할인권", path:'./coupon', subMenuList:[]},
        {index:3, text:"공지사항", path:'./notice', subMenuList:[{index:0, text:"EVENT", path:'./event'},{index:2, text:"Q&A", path:'./q&a'},{index:3, text:"자주하는 질문", path:'./qustion'}]}
    ]

    //const [menus, setMenus] = useState(initMenus)

    const [selectedMenu, setSelectedMenu] = useState('')

    const changeMenu=(menu)=>{
        setSelectedMenu(menu)
    }

    const subMenu=useRef([])
    const headerWrap=useRef([])

    // useEffect(()=>{

    //     console.log('subMenu', subMenu)
    //     for(const item of subMenu.current){
    //         item.style.opacity=0
    //         item.style.display='none'
    //     }
    // })

    const openSubMenu=()=>{
        gsap.killTweensOf(subMenu.current)
        gsap.to(subMenu.current, {display:'block', opacity:1})
        gsap.killTweensOf(headerWrap.current)
        gsap.to(headerWrap.current, {height:250})
    }
    const closeSubMenu=()=>{
        gsap.killTweensOf(subMenu.current)
        gsap.to(subMenu.current, {display:'none', opacity:0})
        gsap.killTweensOf(headerWrap.current)
        gsap.to(headerWrap.current, {height:90})
    }
    
return (
    <div className={Style.header_wrap} ref={headerWrap} onMouseLeave={closeSubMenu}>
        <header>
            <h1 className={Style.logo} onClick={(()=>{
                setSelectedMenu(null) //로고를 클릭하면 selectedMenu 값을 null로 지정해라.
            })}>
                <Link to={'./'}>
                    <img src='./images/logo.png' alt='로고이미지'></img>
                </Link>
            </h1>
            <nav className={Style.mainmenu}>
                <h2 className='hidden'>메인메뉴</h2>
                <ul className={Style.mainmenu_list}>
                    {
                        initMenus.map((item)=>{
                            return (
                                <li className={item.text===selectedMenu && Style.selected} onClick={()=>{
                                    changeMenu(item.text)
                                }} onMouseEnter={openSubMenu}>
                                    <Link to={item.path}>
                                    {
                                        item.subMenuList.length < 1 ?
                                        <>
                                            {item.text}
                                        </>
                                        : 
                                        <>
                                            {item.text}

                                            <ul className={Style.submenu_list} ref={(el)=>(subMenu.current[item.index]=el)}>
                                            
                                                               
                                                {
                                                    item.subMenuList.map((item)=>{
                                                        return(
                                                            <li >{item.text}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </>
                                    }

                                    {/* 

                                    {item.text}

                                    <ul className={Style.submenu_list}>
                                        <li>submenu1</li>
                                        <li>submenu1</li>
                                        <li>submenu1</li>
                                        <li>submenu1</li>
                                    </ul> */}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className={Style.search}>
                <p className={Style.search_ex}>
                    <input type="text" placeholder="2024 여수 불꽃축제"/>
                </p>
                <p className={Style.search_icon}>
                    <img src='/images/main_search_icon.png' alt="돋보기아이콘"/>
                </p>
            </div>
            <nav className={Style.login}>
                <h2 className='hidden'>로그인메뉴</h2>
                <ul className={Style.login_list}>
                    <li>
                        <p className={Style.login_txt}>LOGIN</p>
                        <p className={Style.login_icon}>
                            <img src='/images/main_nav_login_icon.png' alt="로그인아이콘"/>
                        </p>
                    </li>
                    <li>
                        <p className={Style.login_txt}>MY PAGE</p>
                        <p className={Style.login_icon}>
                            <img src='/images/main_nav_user_icon.png' alt="유저아이콘"/>
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
