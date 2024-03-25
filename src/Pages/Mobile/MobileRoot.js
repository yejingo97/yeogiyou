import React from 'react'
import MobileHeader from './MobileHeader'
import { Outlet } from 'react-router-dom'
import MobileFooter from './MobileFooter'
import MobileFooterFix from './MobileFooterFix'

export default function MobileRoot() {
  return (
    <>
        <MobileHeader/>
            <Outlet/>
        <MobileFooter/>
        <MobileFooterFix/>
    </>
  )
}
