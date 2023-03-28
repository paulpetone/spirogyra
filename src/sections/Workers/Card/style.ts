import styled from 'styled-components'

export default {
  Card: styled.div`
    display: flex;
    align-items: center;    
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: none;
    }

    @media (min-width: 800px) {
      width: 40%;
      margin-bottom: 40px;
    }
    `,
  Name: styled.h4`
    font-family: 'Scada-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    color: #EE7382;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    @media (min-width: 800px) {
      font-size: 20px;
    }
    `,
  Job: styled.h4`
    font-family: 'Scada-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    color: #EE7382;
    letter-spacing: 0.05em;

    @media (min-width: 800px) {
      font-size: 20px;
    }
    `,
  TextHolder: styled.div`
    max-width: 260px;
  `,
  Picture: styled.img`
    src(${props => props.src})
  `,
  PicHolder: styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #EE7382;
    margin-right: 10px;

    @media (min-width: 800px) {
      width: 80px;
      height: 80px;
      margin-right: 22px;
    }
    `
}