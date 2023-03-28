import React from 'react'
import S from './styles'

import Instagram from '../../assets/instagram.svg'
import Envelope from '../../assets/envelope.svg'

export default function () {
  return (
    <S.WorkersFooter>
      <S.Title>Vamos bater um papo?</S.Title>

      <a className="button" href="mailto:spirogyra.fest@gmail.com" target="_blank">
        <Envelope />
        MANDA UM EMAIL!
      </a>
      <a className="button" href="https://www.instagram.com/spirogyra.fest/" target="_blank">
        <Instagram />
        CHAMA NA DM
      </a>
    </S.WorkersFooter>
  )
}
