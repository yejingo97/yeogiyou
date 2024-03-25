import React, { useState } from 'react'
import Style from './css/SubTemaList.module.css'
import useProducts from '../hooks/useProducts'
import Visualsub from '../Components/Visualsub'
import Product from '../Components/Product'

export default function Temasub() {


  const initCategory=["전체", "농장체험", "캠핑/글램핑", "계절축제", "식물/수목원", "역사/전통", "특산물", "꽃축제", "이색축제", "공연/전시"]

  const [allProducts] = useProducts()

  const [categorys, setAllCategorys] = useState('전체')

//   const [selectedCategory, setSelectedCategory] = useState('전체')

  const changeCategory=(category)=>{
    setAllCategorys(category)
  }

  const filteredItems=getFilteredItems(allProducts, categorys)

  function getFilteredItems(products, category){
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
    <div className={Style.contents_wrap}>
        <Visualsub/>
        <section className={Style.tema}>
            <h2 className={Style.sub_title}>테마별축제</h2>
            <div className={Style.sub_invitation}>
                <nav>
                    <ul className={Style.sub_invitation_list}>
                    <li>홈</li>
                    <li>
                        <i id="chevronup" class="fa-solid fa-chevron-up fa-rotate-90"></i>
                    </li>
                    <li>테마별 축제</li>
                    <li>
                        <i id="chevronup" class="fa-solid fa-chevron-up fa-rotate-90"></i>
                    </li>
                    <li>전체</li>
                    </ul>
                </nav>
            </div>
            <div className={Style.tema_category}>
                <nav>
                    <ul className={Style.tema_category_list}>
                        {/* <li>전체</li>
                        <li>인기축제</li>
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
                         initCategory.map((item)=>{
                            return (
                                <li className={item===categorys && Style.selected} onClick={()=>{
                                    changeCategory(item)
                                }}>{item}</li>
                            )
                         })
                        }
                    </ul>
                </nav>
            </div>
            <div className={Style.temaall}>
                <ul className={Style.temaall_list}>
                    {
                        filteredItems.map((item)=>{
                            return (
                                // <li>
                                    
                                //    <Link to={`/tema/${item.id}`}>
                                    
                                //     <div className={Style.tema_list_img}>
                                //         <img src={item.image} alt=''/>
                                //         {
                                //             item.isBest===true ? <p className={Style.best}>Best</p> : ''
                                //         }
                                //     </div>

                                //         <div className={Style.tema_list_txt}>
                                //             <p className={Style.tema_list_maintm}>{item.category}</p>
                                //             <p className={Style.tema_list_title}>{item.name}</p>
                                //             <p className={Style.tema_list_intro}>
                                //             {item.intro}
                                //             </p>
                                //         </div>

                                //    </Link>
                                // </li>
                                <Product item={item}/>
                            )
                        })
                    }
                    

                </ul>
            </div>
            <div className={Style.sub_page_num}>
                <nav>
                    <ul className={Style.sub_page_num_list}>
                        <li>
                            <i id="chevronup" class="fa-solid fa-chevron-up fa-rotate-270"/>
                        </li>
                        <li className={Style.selected}>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>
                            <i id="chevronup" class="fa-solid fa-chevron-up fa-rotate-90"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
  )
}
