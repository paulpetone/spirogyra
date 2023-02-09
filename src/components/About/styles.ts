import styled from 'styled-components'

export default {
  About: styled.section`
    height: 100vh;
    padding: 20vh 25px 0;

    @media (min-width: 800px) {
      padding: 20vh 20% 0 40%;
    }

    p {
      margin-bottom: 3vh;
      font-size: 3vh;
      font-weight: normal;
    }
  `,
  Title: styled.h2`
    color: #AACF87;
    margin-bottom: 24px;
    font-size: 5vh;
    letter-spacing: 3px;
  `,
  Red: styled.p`
    color: #EE7382;
  `,
  Green: styled.p`
    color: #AACF87;
  `
}
