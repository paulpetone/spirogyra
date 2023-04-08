import styled from 'styled-components'
import TheFestStar from '../../assets/the-fest-star.svg'
import OFestival from '../../images/o-festival.jpg'


export default {
  TheFestBanner: styled.section`
    height: 270px;
    position: relative;
    overflow: hidden;
    background: url('${OFestival}');
    background-size: cover;

    @media (min-width: 800px) {
      height: 512px;
      background-position: 0 0;
    }
  `,
  Text: styled.h2`
    padding: 14px 24px 0;
    position: absolute;
    z-index: 2;
    font-size: 56px;
    color: #AACF87;
    line-height: 70px;
    letter-spacing: 12px;

    @media (min-width: 800px) {
      font-size: 120px;
      line-height: 120px;
      letter-spacing: 12px;
      padding: 50px 137px;
    }
  `,
  StyledFestStar: styled(TheFestStar)`
    @media (min-width: 800px) {
      width: 96px;
      height: 96px;
    }
  `
}
