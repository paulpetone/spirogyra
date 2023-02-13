import React from 'react'
import S from './styles'
import OFestival from '../../images/o-festival.jpg'

export default function () {
  return (
    <S.TheFestBanner id="o-festival">
      <img src={OFestival} alt="O Festival" />
      <S.Text>
        O <br />
        FEST <br />
        VAL <br />
      </S.Text>
    </S.TheFestBanner>
  )
}
