import styled from 'styled-components'

export default {
  Footer: styled.footer`
    height: 59px;
    background-color: #AACF87;
    display: flex;
    align-items: center;
    padding: 13px 24px;
    box-sizing: border-box;

    @media(min-width: 1280px) {
      padding: 40px 135px
    }
  `,
  TitleHolder: styled.div`
  
  `,
  Title: styled.h1`
  color: #333333;
  font-size: 16px;
  margin-left: 8px;
  span {
      display: block;
      line-height: 26px;

      &.gyra {
        letter-spacing: 0.1em;
        margin-top: -7.5px
      }
    }
  `,
  Icon: styled.div`

    .svg {
      width: 32px;
      height: 32px;
  }
  
  `,
  InstagramLink: styled.a`
    font-family: 'Scada-Regular';
    font-size: 14px;
    color: #EE7382;
    margin-left: 28px;
    text-decoration: none;  
  `,
}
