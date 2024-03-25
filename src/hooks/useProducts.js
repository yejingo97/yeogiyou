
import { useEffect, useState } from 'react'
// import axios from 'axios'
import { getProducts } from '../api/firebase'

export default function useProducts() {

    const [allTema, setAllTema] = useState([])

  
    useEffect(()=>{
      // 절대경로 
      getProducts().then((res)=>{
          setAllTema(res)
        })
    },[])

  return (
    [allTema]
  )
}
