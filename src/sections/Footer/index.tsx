import React from 'react'
import S from './styles'
import Solzinho from '../../assets/solzinho.svg'

export default function () {
  return (
    <S.Footer>
      <S.Icon>
        <Solzinho />
      </S.Icon>
      <S.TitleHolder>
        <S.Title>
          <span>SPIRO</span>
          <span className='gyra'>GYRA</span>
        </S.Title>
      </S.TitleHolder>
      <S.InstagramLink href='https://www.instagram.com/spirogyra.fest/?hl=en'>INSTAGRAM</S.InstagramLink>
      <S.InstagramLink href='mailto:spirogyra.fest@gmail.com'>EMAIL</S.InstagramLink>
    </S.Footer>
  )
}
