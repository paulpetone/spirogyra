import styled from 'styled-components'

export default {
  WorkersFooter: styled.section`
    padding: 0 24px 30px;

    .button {
      border: 1px solid #333;
      margin-bottom: 24px;
    }

    @media (min-width: 800px) {
      padding: 80px 135px 40px;
      line-height: 90px;
    }
  `,
  Title: styled.h2`
    text-transform: uppercase;
    color: #AACF87;
    margin-bottom: 24px;
    font-size: 24px;

    @media (min-width: 800px) {
      font-size: 72px;
      max-width: 690px;
    }
  `
}
