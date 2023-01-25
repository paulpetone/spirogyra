import styled from 'styled-components'
import Florzinha from '../../assets/florzinha.svg'

export default {
  Banner: styled.section`
        padding: 40px 22px 0;
        height: 100vh;

        @media (min-width: 800px) {
            padding: 60px 140px;
        }
    `,
  Title: styled.h1`
        color: #AACF87;
        font-size: 56px;

        @media (min-width: 800px) {
            font-size: 128px;
        }

        span {
            display: block;
            line-height: 70px;
            letter-spacing: 6px;

            @media (min-width: 800px) {
                line-height: 200px;
            }

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
        margin-bottom: 10%;
    `,
  FirstIconRow: styled.div`
        margin-top: 12px;
    `,
  SecondIconRow: styled.div`
        margin-top: 30px;
    `,
  NoisHolder: styled.div`
        display: flex;
        flex-direction: column;
  `,
  AnimatedArea: styled.div`
    align-self: flex-end;
    width: 232px;
    position: relative;

    @media (min-width: 800px) {
        width: 370px;
    }
  `,
  Nois: styled.img`
        width: 226px;
        border: 3px solid #AACF87;

        @media (min-width: 800px) {
            width: 364px;
        }
  `,
  Foguinho: styled.img`
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
  `,
  EstrelaPCaraio: styled.div`
        position: absolute;
        width: 112px;
        display: flex;
        flex-wrap: wrap;
        z-index: 1;
        top: 20px;
        right: 186px;

        @media (min-width: 800px) {
            width: 180px;
            right: 284px;
        }

        svg {
            width: 24px;
            height: 24px;
            margin-right: 13px;
            margin-bottom: 12px;

            @media (min-width: 800px) {
                width: 38px;
                height: 38px;
            }
        }
  `,
  Ornaments: styled.div`
        position: relative;
        @media (min-width: 800px) {
            position: absolute;
            right: 32px;
        }
  `,
  Florzinha: styled(Florzinha)`
        display: none;

        @media (min-width: 370px) {
            display: inline-block;
            margin-left: 16px;
        }
  `
}