import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Banner from '../components/Banner'
import About from '../components/About'
import TheFestBanner from '../components/TheFestBanner'
import Photos from '../components/Photos'
import Workers from '../components/Workers'
import { GlobalStyles } from '../theme'
import Footer from '../components/Footer'
import TheFestIntroduction from '../components/TheFestIntroduction'
import FirstEdition from '../components/FirstEdition'
import SecondEdition from '../components/SecondEdition'
import TheFestFooter from '../components/TheFestFooter'
import PhotosHeader from '../components/PhotosHeader'
import WorkersFooter from '../components/WorkersFooter'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <div id="quem-somos">
        <About />
      </div>
      <div id="o-festival">
        <TheFestBanner />
        <TheFestIntroduction />
        <FirstEdition />
        <SecondEdition />
        <TheFestFooter />
      </div>
      <div id="fotos">
        <PhotosHeader />
        <Photos />
      </div>
      <div id="idealizadores">
        <Workers />
        <WorkersFooter />
      </div>
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
