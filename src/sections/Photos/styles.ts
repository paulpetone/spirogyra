import styled from 'styled-components'

export default {
  Photos: styled.section`
    display: flex;
    flex-wrap: wrap;
  `,
  Photo: styled.div`
    width: 33.3333%;
    overflow: hidden;
    max-height: 120px;
    cursor: pointer;
    display: flex;
    align-items: center;

    @media (min-width: 800px) {
      max-height: 426px;
    }

    img {
      width: 100%;
      transition: all .2s linear;
      filter: grayscale(1);
    }

    &:hover {
      img {
        transform: scale(1.2);
        filter: grayscale(0);
      }
    }
  `
}
