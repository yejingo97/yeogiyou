import React, { useState } from 'react'
import Style from './css/MobileTemaList.module.css'
import useProducts from '../../hooks/useProducts'
import { Link } from 'react-router-dom'

export default function MobileTemaList() {

    const initMobileCategorys=["전체", "농장체험", "캠핑/글램핑", "계절축제", "식물/수목원", "역사/전통", "특산물", "꽃축제", "이색축제", "공연/전시"]

    const [allMobileProducts] = useProducts()

    const [mobileCategorys, setMobileCategorys] = useState('전체')

    const changeMobileCategory=(category)=>{
        setMobileCategorys(category)
    }

    const filteredMobileItems=getFilteredMobileItems(allMobileProducts, mobileCategorys)

    function getFilteredMobileItems(products, category){
        if(category==='전체'){
            return (
                products
            )
        }else{
            return (
                products.filter((item)=>(item.category===category))
            )
        }
    }
  return (
    <div className={Style.temalist_wrap}>
        <div className={Style.temalist}>
            <div className={Style.tema_category}>
                <ul className={Style.tema_category_list}>
                    {/* <li className={Style.selected_category}>전체</li>
                    <li>농장체험</li>
                    <li>캠핑/글램핑</li>
                    <li>계절축제</li>
                    <li>식물/수목원</li>
                    <li>역사/전통</li>
                    <li>특산물</li>
                    <li>꽃축제</li>
                    <li>이색축제</li>
                    <li>공연/전시</li> */}
                    {
                        initMobileCategorys.map((item)=>{
                            return (
                                <li className={item===mobileCategorys && Style.selected_category} onClick={()=>{
                                    changeMobileCategory(item)
                                }}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={Style.tema_order}>
                <ul className={Style.tema_order_list}>
                    <li className={Style.selected_order}>기본순</li>
                    <li>조회순</li>
                    <li>좋아요순</li>
                </ul>
            </div>
            <div className={Style.tema_products}>
                <ul className={Style.tema_products_list}>
                    {
                        filteredMobileItems.map((item)=>{
                            return (
                                <li>
                                    <Link to={`/mobiletema/${item.id}`}>
                                        <p className={Style.product_img}>
                                            <img src={item.image} alt='테마상품이미지01'/>
                                        </p>
                                        <div className={Style.product_txt}>
                                            <p className={Style.product_title}>
                                                {item.name}
                                            </p>
                                            <p className={Style.product_price}>
                                                {item.price}
                                            </p>
                                            <p className={Style.product_date}>
                                                {item.date}
                                            </p>
                                            <p className={Style.product_place}>
                                                {item.place}
                                            </p>
                                            <p className={Style.product_intro}>
                                                {item.intro}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {/* <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className={Style.product_img}>
                            <img src='/images/mobile_images/snowsnoopy.jpg' alt='테마상품이미지01'/>
                        </p>
                        <div className={Style.product_txt}>
                            <p className={Style.product_title}>
                                스노우 스누피
                            </p>
                            <p className={Style.product_price}>
                                입장료 18,000원
                            </p>
                            <p className={Style.product_date}>
                                2023.12.10 ~ 2024.03.31
                            </p>
                            <p className={Style.product_place}>
                                강원 평창군 봉평면 태기로 174
                            </p>
                            <p className={Style.product_intro}>
                                겨울 분위기 속 귀여운 스누피와 함...
                            </p>
                        </div>
                    </li> */}
                </ul>
            </div>
            <div className={Style.temalist_page}>
                <ul className={Style.temalist_page_list}>
                    <li>
                        <i id="chevronup" class="fa-solid fa-chevron-up fa-rotate-270"/>
                    </li>
                    <li className={Style.selected_page}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>
                        <i id="chevronup" class="fa-solid fa-chevron-up fa-rotate-90"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
