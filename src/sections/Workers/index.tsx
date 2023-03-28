import React from 'react'
import Card from './Card'
import S from './styles'
import BannerStyle from '../Banner/styles'
import MiniEstrela from '../../assets/miniestrela.svg'

type TWorkers = TWorker[];

type TWorker = {
  name: string,
  job: string,
  picture: string
}

const workers: TWorkers = [
  {
    name: 'Julia Pasquarelli',
    job: 'designer & ilustradora',
    picture: ''
  },
  {
    name: 'Paulo Silveira',
    job: 'programador & músico',
    picture: ''
  },
  {
    name: 'Mariana Estol',
    job: 'musicista, atriz & diretora de arte',
    picture: ''
  },
  {
    name: 'Ba Pimentel',
    job: 'publicitária & musicista',
    picture: ''
  },
  {
    name: 'Duda Melo',
    job: 'advogada & ceramista',
    picture: ''
  },
  {
    name: 'Gi Nunes',
    job: 'publicitária & pintora',
    picture: ''
  },
  {
    name: 'Rafa D\'Angelo',
    job: 'publicitário & músico',
    picture: ''
  },
  {
    name: 'João Nhoque',
    job: 'produtor, músico & programador',
    picture: ''
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
              <Card key={`workers-${key}`} name={item.name} picture={item.picture} job={item.job}/>
            )})
        }
      </S.CardHolder>
    </S.Workers>
  )
}

export default Workers
