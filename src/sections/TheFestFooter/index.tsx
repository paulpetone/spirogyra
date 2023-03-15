import React from 'react'
import MiniEstrela from '../../assets/miniestrela.svg'
import Instagram from '../../assets/instagram.svg'
import S from './styles'
import BannerStyle from '../Banner/styles'

export default function () {
  return (
    <S.TheFestFooter>
      <S.Title>
        <BannerStyle.EstrelaPCaraio className='estrelapcaraio--thefest'>
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
        <S.Text>SPIROGYRA È DOCE DOCE DOCE</S.Text>
      </S.Title>
      <S.Invite>Que tal sediar esse evento lindo e maravilhoso?</S.Invite>
      <S.Link href="https://www.instagram.com/spirogyra.fest/" target="_blank">
        <Instagram />
        CHAMA NA DM
      </S.Link>
    </S.TheFestFooter>
  )
}
