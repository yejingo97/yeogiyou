import React from 'react'
import { Link } from 'react-router-dom'
import Style from './css/Product.module.css'

export default function Product({item}) {
  return (
    <li>                    
        <Link to={`/tema/${item.id}`}>
                                    
            <div className={Style.tema_list_img}>
                <img src={item.image} alt=''/>
                {
                    item.isBest===true ? <p className={Style.best}>Best</p> : ''
                }
            </div>

            <div className={Style.tema_list_txt}>
                <p className={Style.tema_list_maintm}>{item.category}</p>
                <p className={Style.tema_list_title}>{item.name}</p>
                <p className={Style.tema_list_intro}>
                    {item.intro}
                </p>
            </div>
        </Link>
    </li>
  )
}
