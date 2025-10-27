import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Items from '../components/Items'

const ItemsRoute = () => {
  return (
    <>
      <Navbar />
      <Items />
      <Footer />
    </>
  )
}

export default ItemsRoute
