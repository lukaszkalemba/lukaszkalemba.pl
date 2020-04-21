import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.font.size.xxxs};
  cursor: pointer;
  display: block;
  width: 170px;
  color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.dark : theme.color.white};
  background-color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.white : 'transparent'};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1em 2em;
  border: ${({ theme }) => `2px solid ${theme.color.white}`};
  z-index: ${({ theme }) => theme.zindex.positive1};
  margin-bottom: 8px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xxs};
    width: 230px;
    margin-bottom: 12px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 0 15px;
    width: 260px;
    transform: skew(-45deg);
  `}

  span {
    display: block;

    ${({ theme }) => theme.media.laptop`
      transform: skew(45deg);
    `}
  }
`;

export default { Button };