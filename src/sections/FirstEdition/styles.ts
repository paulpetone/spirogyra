import styled from 'styled-components'

export default {
  FirstEdition: styled.section`
    background-color: #EE7382;
    color: #333;
    padding: 0 24px 40px;

    @media (min-width: 800px) {
      padding: 0 136px 72px;
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
  Address: styled.div`
    font-size: 16px;
    color: #AACF87;

    @media (min-width: 800px) {
      font-size: 20px;
    }
  `
}
