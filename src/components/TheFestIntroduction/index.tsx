import React from 'react'
import TheFestIntroductionIcon from '../../assets/TheFestIntroductionIcon.svg'
import S from './styles'


export default function () {
  return (
    <S.TheFestIntroduction>
      <TheFestIntroductionIcon className='rotate-reverse' />
      <S.Text>
        <span>Nosso grande encontro:</span> artistas e público juntos em um espaço livre onde a arte é apreciada, compartilhada e ampliada. O Spirogyra Fest é sobre tudo o que podemos realizar de extraordinário quando estamos com as pessoas certas no lugar certo.
      </S.Text>
    </S.TheFestIntroduction>
  )
}
