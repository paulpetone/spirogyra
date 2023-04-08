import React from 'react'
import Card from './Card'
import S from './styles'
import BannerStyle from '../Banner/styles'
import MiniEstrela from '../../assets/miniestrela.svg'
import Julia from '../../images/people/julia.jpg'
import Pol from '../../images/people/pol.jpg'
import Mari from '../../images/people/mari.jpg'
import Ba from '../../images/people/ba.jpg'
import Duda from '../../images/people/duda.jpg'
import Gi from '../../images/people/gi.jpg'
import Rafa from '../../images/people/rafa.jpg'
import Jao from '../../images/people/jao.jpg'
import Feu from '../../images/people/feu.jpg'
import Euclides from '../../images/people/euclides.jpg'

type TWorkers = TWorker[];

type TWorker = {
  name: string
  job: string
  picture: string
  insta: string
}

const workers: TWorkers = [
  {
    name: 'Julia Pasquarelli',
    job: 'designer & ilustradora',
    picture: Julia,
    insta: 'https://www.instagram.com/zu.lia/'
  },
  {
    name: 'Paulo Silveira',
    job: 'programador & músico',
    picture: Pol,
    insta: 'https://www.instagram.com/paulpetone/'
  },
  {
    name: 'Mariana Estol',
    job: 'musicista, atriz & diretora de arte',
    picture: Mari,
    insta: 'https://www.instagram.com/marianaestol/'
  },
  {
    name: 'Ba Pimentel',
    job: 'publicitária & musicista',
    picture: Ba,
    insta: 'https://www.instagram.com/barbarapimentels/'
  },
  {
    name: 'Duda Melo',
    job: 'advogada & ceramista',
    picture: Duda,
    insta: 'https://www.instagram.com/mriavmelo/'
  },
  {
    name: 'Gi Nunes',
    job: 'publicitária & pintora',
    picture: Gi,
    insta: 'https://www.instagram.com/nunesgio/'
  },
  {
    name: 'Rafa D\'Angelo',
    job: 'publicitário & músico',
    picture: Rafa,
    insta: 'https://www.instagram.com/rafamdangelo/'
  },
  {
    name: 'João Nhoque',
    job: 'produtor, músico & programador',
    picture: Jao,
    insta: 'https://www.instagram.com/jgabriel.nhoque/'
  },
  {
    name: 'Euclides Francisco',
    job: 'redator & escritor',
    picture: Euclides,
    insta: 'https://www.instagram.com/euclidesfranciscojr/'
  },
  {
    name: 'Felipe Pasquarelli',
    job: 'cantor & campositor',
    picture: Feu,
    insta: 'https://www.instagram.com/feupasquarelli/'
  },
]

const Workers = () => {
  return (
    <S.Workers>
      <BannerStyle.EstrelaPCaraio className='estrelapcaraio--workers'>
        <MiniEstrela className="rotateOnHover" />
        <MiniEstrela className="scaleOnHover"/>
        <MiniEstrela className="rotateOnHover" />
        <MiniEstrela className="scaleOnHover" />
        <MiniEstrela className="rotateOnHover" />
        <MiniEstrela className="scaleOnHover" />
        <MiniEstrela className="rotateOnHover" />
        <MiniEstrela className="scaleOnHover" />
        <MiniEstrela className="rotateOnHover" />
      </BannerStyle.EstrelaPCaraio>
      <S.Title>Idealizadores</S.Title>
      <S.CardHolder>
        {
          workers.map((item, key)=> {
            return (
              <Card key={`workers-${key}`} {...item} />
            )})
        }
      </S.CardHolder>
    </S.Workers>
  )
}

export default Workers
