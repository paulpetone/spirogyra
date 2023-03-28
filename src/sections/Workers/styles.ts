import styled from 'styled-components'

export default {
  Workers: styled.section`
  padding: 24px 24px;
  position: relative;

  @media (min-width: 800px) {
    padding: 190px 135px 0;
  }
  `,
  Title: styled.h1`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #AACF87;
  margin-bottom: 28px;
  @media (min-width: 800px) {
    font-size: 40px;
    margin-bottom: 56px;
  }
  `,
  CardHolder: styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  `
}
