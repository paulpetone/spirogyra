import styled from 'styled-components'

export default {
  TheFestIntroduction: styled.section`
    background-color: #EE7382;
    display: flex;
    padding: 24px;
    align-items: center;

    @media (min-width: 800px) {
      padding: 56px 136px;

      svg {
        width: 136px;
        height: 136px;
      }
    }
  `,
  Text: styled.p`
    margin-left: 2vw;
    max-width: 60vw;
    font-size: 14px;
    font-family: 'Scada-Regular';

    @media (min-width: 800px) {
      font-size: 24px;
    }

    span {
      color: #AACF87;
    }
  `
}
