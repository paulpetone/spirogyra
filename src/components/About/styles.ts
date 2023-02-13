import styled from 'styled-components'
import SeparatorStar from '../../assets/separator-star.svg'

export default {
  About: styled.section`
    position: relative;
    height: 100vh;
    padding: 20vh 25px 0;
    overflow: hidden;

    p {
      margin-bottom: 3vh;
      font-size: 14px;
      font-weight: normal;
    }

    @media (min-width: 800px) {
      padding: 20vh 20% 0 40%;
      p {
        font-size: 20px;
      } 
    }
  `,
  Title: styled.h2`
    color: #AACF87;
    margin-bottom: 24px;
    font-size: 28px;
    letter-spacing: 3px;

    @media (min-width: 340px) {
      font-size: 32px;
    }

    @media (min-width: 800px) {
      font-size: 40px;
    }
  `,
  Red: styled.p`
    color: #EE7382;
  `,
  Green: styled.p`
    color: #AACF87;
  `,
  StyledSeparatorStar: styled(SeparatorStar)`
    position: absolute;
    height: 130px;
    width: 130px;
    top: calc(20vh - 30px);
    right: -50px;

    @media (min-width: 800px) {
      height: 286px;
      width: 286px;
      right: inherit;
      top: calc(20vh + 100px);
      left: 10vw;
    }
  `
}
