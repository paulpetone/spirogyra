import { MainImage } from 'gatsby-plugin-image'
import React from 'react'
import S from './style'

type TWorker = {
  name: string
  job: string
  picture: string
  insta: string
}

const Card: React.FC<TWorker> = ({ name, job, picture, insta }) => {
  return (
    <S.Card target="_blank" href={insta}>
      <S.PicHolder>
        <MainImage alt={name} src={picture} />
      </S.PicHolder>
      <S.TextHolder>
        <S.Name>{name}</S.Name>
        <S.Job>{job}</S.Job>
      </S.TextHolder>
    </S.Card>
  )
}

export default Card