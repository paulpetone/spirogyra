import styled from 'styled-components'

export default {
  PhotosHeader: styled.section`
    height: 120px;
    font-size: 21px;
    padding: 6px 24px;
    text-transform: uppercase;
    font-family: 'Rovery';

    span {
      color: #AACF87;
      display: block;

      &.pink {
        color: #EE7382;
      }
    }

    @media (min-width: 800px) {
      height: 426px;
      font-size: 72px;
      padding: 62px 136px;
    }
  `,
}
