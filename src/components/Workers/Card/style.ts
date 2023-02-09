import styled from "styled-components";

export default {
    Card: styled.div`
    display: flex;
    align-items: center;    
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: none;
    }
    `,
    Name: styled.h4`
    font-family: 'Silom';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    color: #EE7382;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    `,
    Job: styled.h4`
    font-family: 'Silom';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    color: #EE7382;
    letter-spacing: 0.05em;
    `,
    TextHolder: styled.div`
    
    `,
    Picture: styled.img`
    
    src(${props => props.src})
    `,
    PicHolder: styled.div`
    width: 35px;
    height: 35px;
    border-radius: 25px 25px;
    background-color: #EE7382;
    margin-right: 10px
    `
}