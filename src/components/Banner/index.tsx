import React from 'react'
import S from './styles'
import Estrelinha from '../../assets/estrelinha.svg'
import Florzinha from '../../assets/florzinha.svg'
import Solzinho from '../../assets/solzinho.svg'

export default () => {
  return (
    <S.Banner>
      <S.TitleHolder>
        <S.Title>
          <span>SPIRO</span>
          <span className='gyra'>GYRA</span>
        </S.Title>
        <S.Icons>
          <S.FirstIconRow>
            <Estrelinha/>
          </S.FirstIconRow>
          <S.SecondIconRow>
            <Solzinho />
            <Florzinha/>
          </S.SecondIconRow>
        </S.Icons>
      </S.TitleHolder>
    </S.Banner>
  )
}
