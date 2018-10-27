// Import dependencies
import styled, { createGlobalStyle } from 'styled-components';

// Global styles and resets
createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${typography.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font: 100% / 1.618 Roboto, Arial, sans-serif;
    color: ${colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: ${typography.base}
  }
`;

// H1 heading
const StyleguideHeading = styled.h1`
  position: relative;
  display: inline-block;
  font-weight: 500;

  // Customizable underline
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${colors.text};
  }
`;

// H2 heading
const StyleguideSubheading = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 26px;
  font-weight: 400;
  text-align: left;

  // Customizable underline
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1.5px;
    background-color: ${colors.text};
  }

  div + & {
    margin-top: 60px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <StyleguideHeading>UI Style guide</StyleguideHeading>

        <p>
          A short info about the company. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem.
        </p>

        <StyleguideSubheading>Colors</StyleguideSubheading>

        {/*<Colors colors={colors} />*/}

        <StyleguideSubheading>Typography</StyleguideSubheading>

        {/*<Typography colors={colors} scale={typography} />*/}

        <StyleguideSubheading>Buttons</StyleguideSubheading>

        {/*<Buttons colors={colors} />*/}

        <StyleguideSubheading>Forms</StyleguideSubheading>

        {/*<Forms colors={colors} scale={typography} />*/}
      </AppContainer>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
