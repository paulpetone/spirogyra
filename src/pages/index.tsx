import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Banner from '../sections/Banner'
import About from '../sections/About'
import TheFestBanner from '../sections/TheFestBanner'
import Photos from '../sections/Photos'
import Workers from '../sections/Workers'
import { GlobalStyles } from '../theme'
import Footer from '../sections/Footer'
import TheFestIntroduction from '../sections/TheFestIntroduction'
import FirstEdition from '../sections/FirstEdition'
import SecondEdition from '../sections/SecondEdition'
import TheFestFooter from '../sections/TheFestFooter'
import PhotosHeader from '../sections/PhotosHeader'
import WorkersFooter from '../sections/WorkersFooter'

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
