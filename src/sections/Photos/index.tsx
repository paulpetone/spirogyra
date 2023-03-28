import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import S from './styles'

export default function () {
  return (
    <S.Photos>
      <StaticImage className='closed' alt="Cella" src="../../assets/photos/cella.jpg" />
      <StaticImage className='closed' alt="João e Carol" src="../../assets/photos/joaoecarol.jpg" />
      <StaticImage className='closed' alt="Mari e Ba" src="../../assets/photos/mariebarbara.jpg" />
      <StaticImage className='closed' alt="Mari e Noedir" src="../../assets/photos/marienoedir.jpg" />
      <StaticImage className='closed' alt="Spirogyras" src="../../assets/photos/spirogyras.jpg" />
      <StaticImage className='closed' alt="Noedir e Cella" src="../../assets/photos/noedirecella.jpg" />
      <StaticImage className='closed' alt="Paulo" src="../../assets/photos/paulo.jpg" />
      <StaticImage className='closed' alt="Paulo e Mari" src="../../assets/photos/pauloemari.jpg" />
      <StaticImage className='closed' alt="Rafa" src="../../assets/photos/rafa.jpg" />
    </S.Photos>
  )
}
