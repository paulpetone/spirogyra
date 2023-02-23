import styled from 'styled-components'

export default {
  Bullets: styled.ul`
  `,
  Bullet: styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    svg {
        width: 22px;
        height: 22px;
        margin-right: 8px;
    }
  `,
  Title: styled.h6`
    font-family: 'Scada-Regular';
    text-transform: uppercase;
    color: #AACF87;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: 20px;
  `,
  Desc: styled.span`
    font-size: 16px;
  `,
}
