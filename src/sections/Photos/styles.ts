import styled from 'styled-components'

export default {
  Photos: styled.section`
    display: flex;
    flex-wrap: wrap;
    
    .gatsby-image-wrapper {
      width: 33%;
      max-height: 120px;
      cursor: pointer;

      @media (min-width: 800px) {
        max-height: 426px;
      }

      &:hover {
        img {
          transform: scale(1.2);
          filter: grayscale(0);
        }
      }

      img {
        transition: all .2s linear;
        filter: grayscale(1);
      }
    }
  `
}
