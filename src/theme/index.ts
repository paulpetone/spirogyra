import { createGlobalStyle } from 'styled-components'
// @font-face {font-family:"Rovery";src:url("Vintage_Rovery.eot?") format("eot"),url("Vintage_Rovery.woff") format("woff"),url("Vintage_Rovery.ttf") format("truetype"),url("Vintage_Rovery.svg#VintageRoveryPersonalUse") format("svg");font-weight:normal;font-style:normal;}
// @font-face {font-family:"Silom";src:url("Silom.eot?") format("eot"),url("Silom.woff") format("woff"),url("Silom.ttf") format("truetype"),url("Silom.svg#Silom") format("svg");font-weight:normal;font-style:normal;}
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
    font-family: 'Silom';
    font-weight: normal;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url("fonts/Silom.otf") format("opentype");
  }

* {
    font-family: 'Silom';

    h1 {
        font-family: 'Rovery';
    }
}
`