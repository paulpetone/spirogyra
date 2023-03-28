import styled from 'styled-components'

export default {
  TheFestFooter: styled.section`
    padding: 45px 24px;
    background-color: #AACF87;
    line-height: 34px;

    @media (min-width: 800px) {
      padding: 67px 136px;
      margin-top: -1px;
    }

    .estrelapcaraio--thefest {
      position: inherit;
      width: 240px;
      max-width: 115px;

      @media (min-width: 800px) {
        max-width: 156px;
      }

      svg {
        path {
          fill: #333;
        }
      }
    }
  `,
  Title: styled.div`
    display: flex;
    color: #333;
    font-size: 20px;
    font-family: 'Rovery';
  `,
  Text: styled.div`
    max-width: 180px;

    @media (min-width: 800px) {
      font-size: 40px;
      max-width: 315px;
      line-height: 50px;
    }
  `,
  Invite: styled.div`
    font-size: 16px;
    margin-bottom: 24px;
    line-height: 16px;
    @media (min-width: 800px) {
      font-size: 24px;
      line-height: 24px;
    }
  `,
  Link: styled.a`
    
  `
}
