import styled from 'styled-components'

export default {
  Bullets: styled.ul`
    @media (min-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
  `,
  Bullet: styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    @media (min-width: 800px) {
      width: 50%;
      margin-bottom: 32px;
    }

    svg {
        width: 22px;
        height: 22px;
        margin-right: 8px;

        @media (min-width: 800px) {
          width: 32px;
          height: 32px;
        }
    }
  `,
  Title: styled.h6`
    font-family: 'Scada-Regular';
    text-transform: uppercase;
    color: ${props => props.color};
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: 20px;
  `,
  Desc: styled.span`
    font-size: 16px;

    @media (min-width: 800px) {
        font-size: 20px;
    }
  `,
}
