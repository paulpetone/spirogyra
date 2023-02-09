import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Banner from '../components/Banner'
import About from '../components/About'
import TheFestBanner from '../components/TheFestBanner'
import TheFestContent from '../components/TheFestContent'
import Photos from '../components/Photos'
import Workers from '../components/Workers'
import { GlobalStyles } from '../theme'
import Footer from '../components/Footer'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <About />
      <TheFestBanner />
      <TheFestContent />
      <Photos />
      <Workers />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
  </>
)
