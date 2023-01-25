import React from 'react'
import S from './styles'
import Estrelinha from '../../assets/estrelinha.svg'
import Solzinho from '../../assets/solzinho.svg'
import MiniEstrela from '../../assets/miniestrela.svg'
import Nois from '../../images/nois.jpg'
import Foguinho from '../../images/foguinho.png'

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
            <S.Florzinha />
          </S.SecondIconRow>
        </S.Icons>
      </S.TitleHolder>
      <S.Ornaments>
        <S.EstrelaPCaraio>
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
          <MiniEstrela />
        </S.EstrelaPCaraio>
        <S.NoisHolder>
          <S.AnimatedArea>
            <S.Nois src={Nois} alt="nois" />
            <S.Foguinho src={Foguinho} alt="foguinho" />
          </S.AnimatedArea>
        </S.NoisHolder>
      </S.Ornaments>
    </S.Banner>
  )
}
