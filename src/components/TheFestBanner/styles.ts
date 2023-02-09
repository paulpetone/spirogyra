import styled from 'styled-components'

export default {
  TheFestBanner: styled.section`
    height: 100vh;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      z-index: 1;
      height: 100%;
      top: 0;
      left: 0;
    }
  `,
  Text: styled.h2`
    position: absolute;
    z-index: 2;
  `
}
