import React from 'react'
import Flower from '../../assets/firstEdition/flower.svg'
import Shine from '../../assets/firstEdition/shine.svg'
import Smegma from '../../assets/firstEdition/smegma.svg'
import Star from '../../assets/firstEdition/star.svg'
import Sun from '../../assets/firstEdition/sun.svg'
import MiniEstrela from '../../assets/miniestrela.svg'
import Bullets, { TBulletsProps } from '../../components/Bullets'
import S from './styles'

const bullets: TBulletsProps['bullets'] = [
  {
    icon: Shine,
    title: 'música ao vivo',
    desc: '1 ou 2 dias de evento, X shows autorais.'
  },
  {
    icon: Star,
    title: 'exposição de arte',
    desc: 'Espaço para exibição e venda de prints, telas, flashes tattoo de X artistas diferentes, ambientado com projeção gráfica.'
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
    icon: MiniEstrela,
    title: 'estante literária',
    desc: 'Cada um leva um livro usado e pode trocar por outro da nossa estante.'
  },
  {
    icon: Sun,
    title: 'after com dj',
    desc: 'Um DJ convidado para encerrar o festival com estilo.'
  },
  {
    title: 'venda de ingressos',
    desc: 'Vendas na porta (no dia do evento) e on-line via Sympla (especificações a combinar com o estabelecimento).'
  }
]

export default function () {
  return (
    <S.SecondEdition>
      <S.Header>
        <S.Title>2º edição</S.Title>
        <S.Soon>2023: Em breve!</S.Soon>
      </S.Header>
      <Bullets titleColor="#EE7382" bullets={bullets} />
    </S.SecondEdition>
  )
}
