import React from 'react'
import Visual from '../Components/Visual'
import HomeTema from '../Components/Home/HomeTema'
import HomeFavored from '../Components/Home/HomeFavored'
import HomeSearch from '../Components/Home/HomeSearch'
import HomeShow from '../Components/Home/HomeShow'
import HomeMembership from '../Components/Home/HomeMembership'
import HomeNotice from '../Components/Home/HomeNotice'

export default function Home() {
  return (
    <>
        <Visual/>
        <HomeTema/>
        <HomeFavored/>
        <HomeSearch/>
        <HomeShow/>
        <HomeMembership/>
        <HomeNotice/>
    </>
  )
}
