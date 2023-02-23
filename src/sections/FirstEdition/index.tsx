import React from 'react'
import Flower from '../../assets/firstEdition/flower.svg'
import Shine from '../../assets/firstEdition/shine.svg'
import Smegma from '../../assets/firstEdition/smegma.svg'
import Star from '../../assets/firstEdition/star.svg'
import Sun from '../../assets/firstEdition/sun.svg'
import Bullets, { TBulletsProps } from '../../components/Bullets'
import S from './styles'

const bullets: TBulletsProps['bullets'] = [
  {
    icon: Shine,
    title: 'música ao vivo',
    desc: '1 dia de evento, 15 shows autorais'
  },
  {
    icon: Star,
    title: 'exposição de arte',
    desc: 'Espaço para exibição de prints e telas de 4 artistas diferentes.'
  },
  {
    icon: Flower,
    title: 'brechó',
    desc: 'Um cantinho especial para compra de peças de roupa garimpadas.'
  },
  {
    icon: Smegma,
    title: 'cozinha e bar',
    desc: 'Pratos e bebidas disponibilizados pelo sediador do evento.'
  },
  {
    icon: Sun,
    title: 'after com dj',
    desc: 'Um DJ convidado para encerrar o festival com estilo.'
  },
  {
    title: 'E INGRESSOS ESGOTADOS!',
    desc: 'Vendas via Instagram Direct, esgotadas com uma semana de antecedência.'
  }
]

export default function () {
  return (
    <S.FirstEdition>
      <S.Header>
        <S.Title>1º edição</S.Title>
        <S.Address>2022: Q.G. 791, Bela Vista - SP</S.Address>
      </S.Header>
      <S.Bullets>
        <Bullets bullets={bullets} />
      </S.Bullets>
    </S.FirstEdition>
  )
}
