import styled from 'styled-components'

export default {
  PhotosHeader: styled.section`
    font-size: 21px;
    padding: 26px 24px;
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
      font-size: 72px;
      padding: 62px 136px;
    }
  `,
}
