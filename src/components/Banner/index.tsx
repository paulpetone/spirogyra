import React from 'react'
import S from './styles'
import Estrelinha from '../../assets/estrelinha.svg'
import Solzinho from '../../assets/solzinho.svg'
import MiniEstrela from '../../assets/miniestrela.svg'
import Nois from '../../images/nois.jpg'

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
            <Solzinho className="rotate" />
            <S.Florzinha />
          </S.SecondIconRow>
        </S.Icons>
      </S.TitleHolder>
      <S.Links>
        <a href="#sobre">SOBRE {'>'}</a>
        <a href="#2022">FESTIVAL 2022 {'>'}</a>
        <a href="#fotos">FOTOS {'>'}</a>
        <a href="#colaboradores">COLABORADORES {'>'}</a>
        <a href="https://www.instagram.com/spirogyra.fest/">INSTAGRAM {'>'}</a>
      </S.Links>
      <S.Ornaments>
        <S.EstrelaPCaraio>
          <MiniEstrela className="rotateOnHover" />
          <MiniEstrela className="scaleOnHover"/>
          <MiniEstrela className="rotateOnHover" />
          <MiniEstrela className="scaleOnHover" />
          <MiniEstrela className="rotateOnHover" />
          <MiniEstrela className="scaleOnHover" />
          <MiniEstrela className="rotateOnHover" />
          <MiniEstrela className="scaleOnHover" />
          <MiniEstrela className="rotateOnHover" />
        </S.EstrelaPCaraio>
        <S.NoisHolder>
          <S.AnimatedArea>
            <S.Nois src={Nois} alt="nois" />
            <S.Foguinho />
          </S.AnimatedArea>
        </S.NoisHolder>
      </S.Ornaments>
    </S.Banner>
  )
}
