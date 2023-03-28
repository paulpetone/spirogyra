import React from 'react'
import S from './style'

type TWorker = {
    name: string
    job: string
    picture: string
}

const Card: React.FC<TWorker> = ({name, job, picture}) => {
  return (
    <S.Card>
      <S.PicHolder>
        <S.Picture src={picture}/>
      </S.PicHolder>
      <S.TextHolder>
        <S.Name>{name}</S.Name>
        <S.Job>{job}</S.Job>
      </S.TextHolder>
    </S.Card>
  )
}

export default Card