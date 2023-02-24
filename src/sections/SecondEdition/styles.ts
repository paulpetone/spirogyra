import styled from 'styled-components'

export default {
  SecondEdition: styled.section`
    background-color: #AACF87;
    color: #333;
    padding: 24px 24px 40px;
    
    svg {
      fill: #EE7382;
      stroke: #EE7382;
      * {
        fill: #EE7382;
      }
    }

    @media (min-width: 800px) {
      padding: 56px 136px 72px;
    }
  `,
  Header: styled.div`
    margin-bottom: 30px;

    @media (min-width: 800px) {
      margin-bottom: 42px;
    }
  `,
  Title: styled.h4`
    font-size: 32px;
    margin-bottom: 8px;
    font-family: 'Scada-Regular';
    
    @media (min-width: 800px) {
      font-size: 40px;
    }
  `,
  Soon: styled.div`
    font-size: 16px;
    color: #EE7382;

    @media (min-width: 800px) {
      font-size: 20px;
    }
  `
}
