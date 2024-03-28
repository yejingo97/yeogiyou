import React, { useEffect, useState } from 'react'
import Style from './css/SubTemaDetail.module.css'
import { FaRegHeart } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { useParams } from 'react-router-dom';
// import useProducts from '../hooks/useProducts';
import { getProductDetail } from '../api/firebase';
import regExp from '../util/regExp';

export default function SubSnoopy() {


  const {temaId} = useParams('')

  //const [allProducts] = useProducts()

  const [selectedItem , setSelectedItem] = useState({})

    useEffect(()=>{
        getProductDetail(temaId).then((res)=>{
            setSelectedItem(res)
        })
        window.scrollTo(0,0)
    },[temaId])



  return (
    <div className={Style.product_wrap}>
        <div className={Style.header_bar}>
            bar
        </div>
        <section className={Style.product}>
            <h2 className='hidden'>상세페이지</h2>
            <div className={Style.product_img}>
                <p className={Style.product_sub_img01}>
                    <img src={selectedItem?.subImage1} alt=''/>
                </p>
                <p className={Style.product_sub_img02}>
                    <img src={selectedItem?.subImage2} alt=''/>
                </p>
            </div>
            <div className={Style.product_main_img}>
                <img src={selectedItem?.image} alt=''/>
            </div>
            <div className={Style.product_txt}>
                <div className={Style.product_txt_top}>
                    <div className={Style.product_title}>
                       {selectedItem?.name}
                        <span className={Style.product_tema}>{selectedItem?.category}</span>
                    </div>
                    <div className={Style.product_title_right}>
                        <p className={Style.product_good}>
                            <FaRegHeart />
                        </p>
                        <p className={Style.product_share}>
                            <FiShare2 />
                        </p>
                    </div>
                </div>
                <div className={Style.product_txt_bottom}>
                    <p className={Style.product_hashtag}>
                        <p className={Style.tema_key}>{selectedItem?.kids}</p>
                        <p className={Style.tema_key}>{selectedItem?.exotiDate}</p>
                        <p className={Style.tema_key}>{selectedItem?.cultural}</p>
                        <p className={Style.tema_key}>{selectedItem?.activity}</p>
                        <p className={Style.tema_key}>{selectedItem?.food}</p>
                        {/* #액티비티 #인기축제 #이색데이트 #키즈 */}
                    </p>
                    <p className={Style.product_data_title}>
                        행사일정
                    </p>
                    <p className={Style.product_data}>
                        {selectedItem?.date}
                    </p>
                    <p className={Style.product_data_title}>
                        행사장소
                    </p>
                    <p className={Style.product_data}>
                        {selectedItem?.place}
                    </p>
                    <p className={Style.product_data_title}>
                        행사정보
                    </p>
                    <p className={Style.product_data}>
                        {selectedItem?.information}
                    </p>
                    <p className={Style.product_data_title}>
                        입장료
                    </p>
                    <p className={Style.product_data}>
                        {regExp.comma(selectedItem?.admission)}
                        {/* 성인 18,000원 / 청소년 15,000원 / 소인 13,000원<br/>
                        36개월 미만 무료 입장<br/>
                        평창군 거주시 20% 할인<br/>
                        경로 65세 이상 20% 할인<br/>
                        장애인/국가유공자 9,000원<br/>
                        ※ 무료 입장 및 할인 적용 시 신분증 소지자에 한하여 적용<br/> */}
                    </p>
                </div>
            </div>
            <div className={Style.product_link}>
                <ul className={Style.product_link_list}>
                    <li>
                        갤러리
                    </li>
                    <li>
                        공식 홈페이지
                    </li>
                    <li>
                        문의전화
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}
