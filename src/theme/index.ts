import { createGlobalStyle } from 'styled-components'

export const GlobalStyles =  createGlobalStyle`
@font-face {
    font-family: 'Rovery';
    font-weight: normal;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url("fonts/VintageRoveryPersonalUse.otf") format("opentype");
  }

  @font-face {
    font-family: 'Scada-Regular';
    font-weight: normal;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url("fonts/Scada-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: 'Scada-Bold';
    font-weight: bold;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Bold';
    src: url("fonts/Scada-Bold.ttf") format("truetype");
  }

* {
    border: 0;
    margin: 0;
    padding: 0;
}

@keyframes rotateMaluquete {
  0%    { transform: rotate(0deg); }
  50%   { transform: rotate(180deg); }
  100%  { transform: rotate(360deg); }
}

@keyframes scaleMaluquete {
  0%    { transform: scale(1); }
  50%   { transform: scale(1.5); }
  100%  { transform: scale(1); }
}

.rotate {
  animation: rotateMaluquete 5s ease-in-out infinite;
}

.rotateOnHover {
  &:hover {
    animation: rotateMaluquete 3s ease-in-out;
  }
}

.scaleOnHover {
  &:hover {
    animation: scaleMaluquete 1s linear;
  }
}

html {
  scroll-behavior: smooth;
}

body {
    font-family: 'Scada-Regular';
    background: #333333;

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Rovery';
    }
}
`