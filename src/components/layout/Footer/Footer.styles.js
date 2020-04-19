import styled from 'styled-components';
import slashPattern from 'assets/images/pattern_slash-dark.svg';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;

  ${({ theme }) => theme.media.desktop`
    ::before {
      content: '';
      position: absolute;
      background: url(${slashPattern}) no-repeat;
      right: 8%;
      bottom: 0;
      background-size: 100%;
      height: 400px;
      width: 450px;
      background-position-y: bottom;

    ${theme.media.desktop`
      height: 600px;
      right: 16%;
    `};

    ${theme.media.largeDesktop`
      height: 800px;
      width: 550px;
    `}
    }
`}
`;

const TopBar = styled.div`
  ${({ theme }) => theme.media.desktop`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 110px 0 75px;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    padding: 150px 0 100px;
  `}
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
    padding-bottom: 20px;
  `}

  ${({ theme }) => theme.media.desktop`
    flex-direction: row;
    padding-bottom: 30px;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    padding-bottom: 35px;
  `}
`;

export default { Footer, TopBar, BottomBar };
