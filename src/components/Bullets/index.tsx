import React from 'react'
import S from './styles'

export type TBulletsProps = {
    bullets: {
        title: string
        desc: string
        icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    }[]
    titleColor: '#AACF87' | '#EE7382'
}

const Bullets = ({ bullets, titleColor }: TBulletsProps) => {
  return <S.Bullets>
    {
      bullets.map((bullet, key) => {
        return (
          <S.Bullet key={`bullet-${key}`}>
            <S.Title color={titleColor}>
              {bullet.icon && <bullet.icon className='rotateOnHover' />}
              {bullet.title}
            </S.Title>
            
            <S.Desc>
              {bullet.desc}
            </S.Desc>
          </S.Bullet>
        )
      })
    }
  </S.Bullets>
}

export default Bullets