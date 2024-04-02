import React from 'react'
import Header from '../Component/Header';
import Hero from '../Component/Hero';
import Container from '../Component/Container';
import LogoContainer from '../Component/LogoContainer';
import AboutMe from '../Component/AboutMe';
import Footer from '../Component/Footer';


const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Container Title = {"Projects"}/>
    <LogoContainer/>
    <AboutMe/> 
    <Footer/>
    </>
  )
}

export default Home;