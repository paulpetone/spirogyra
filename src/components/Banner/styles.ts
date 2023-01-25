import styled from 'styled-components'

export default {
    Banner: styled.section`
        padding: 22px 40px;
    `,
    Title: styled.h1`
        color: #AACF87;
        font-size: 56px;
        span {
            display: block;
            line-height: 70px;
            letter-spacing: 6px;

            &.gyra {
                letter-spacing: 12px;
            }
        }
    `,
    Icons: styled.div`
        display: flex;
        flex-direction: column;
        svg {
            width: 36px;
            height: 36px;
        }
    `,
    TitleHolder: styled.div`
        display: flex;
        justify-content: flex-start;
    `,
    FirstIconRow: styled.div`
        margin-top: 12px;
    `,
    SecondIconRow: styled.div`
        margin-top: 30px;
    `
}