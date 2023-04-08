import { Lightbox } from 'react-modal-image'
import React, { useState } from 'react'
import S from './styles'
import cella from '../../images/photos/cella.jpg'
import joaoecarol from '../../images/photos/joaoecarol.jpg'
import mariebarbara from '../../images/photos/mariebarbara.jpg'
import marienoedir from '../../images/photos/marienoedir.jpg'
import spirogyras from '../../images/photos/spirogyras.jpg'
import noedirecella from '../../images/photos/noedirecella.jpg'
import paulo from '../../images/photos/paulo.jpg'
import pauloemari from '../../images/photos/pauloemari.jpg'
import rafa from '../../images/photos/rafa.jpg'

const photos = {
  cella: {
    src: cella,
    alt: 'Cella Azevedo'
  },
  joaoecarol: {
    src: joaoecarol,
    alt: 'João Nhoque e Carol'
  },
  mariebarbara: {
    src: mariebarbara,
    alt: 'Mariana Estol e Bárbara Pimentel'
  },
  marienoedir: {
    src: marienoedir,
    alt: 'Mariana Estol e Noedir'
  },
  spirogyras: {
    src: spirogyras,
    alt: 'Spirogyras'
  },
  noedirecella: {
    src: noedirecella,
    alt: 'Noedir e Cella Azevedo'
  },
  paulo: {
    src: paulo,
    alt: 'Paulpetone'
  },
  pauloemari: {
    src: pauloemari,
    alt: 'Paulpetone e Mariana Estol'
  },
  rafa: {
    src: rafa,
    alt: 'Rafa D\'Angelo'
  }
}

type TPhoto = keyof typeof photos

export default function () {
  const [image, setImage] = useState(photos.cella)
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const openModal = (image: string) => () => {
    const currentImg = photos?.[image as TPhoto]
    setImage(currentImg)
    setModalIsVisible(true)
  }
  
  return (
    <S.Photos>
      {
        modalIsVisible ?
          <Lightbox
            medium={image.src}
            large={image.src}
            alt={image.alt}
            onClose={() => setModalIsVisible(false)} /> : null
      }
      {Object.keys(photos).map((value, key) => {
        const currentPhoto = photos[value as TPhoto]
        return (
          <S.Photo key={`photo-${key}`} onClick={openModal(value)}>
            <img alt={currentPhoto.alt} src={currentPhoto.src} />
          </S.Photo>
        )
      })}
    </S.Photos>
  )
}
