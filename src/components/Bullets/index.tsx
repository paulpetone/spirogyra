import React from 'react'
import S from './styles'

export type TBulletsProps = {
    bullets: {
        title: string
        desc: string
        icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    }[]
}

const Bullets = ({ bullets }: TBulletsProps) => {
  return <S.Bullets>
    {
      bullets.map((bullet) => {
        return (
          <S.Bullet>
            <S.Title>
              {bullet.icon && <bullet.icon />}
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