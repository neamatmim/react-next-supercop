import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { BoxWrapper } from '../../../helpers/styled-utility';
import { themeGet, get } from '../../../helpers/extended-styled-system';

const ContainerWrapper = styled(BoxWrapper)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${themeGet('grid.columnPaddingRight', '1rem')};
  padding-left: ${themeGet('grid.columnPaddingLeft', '1rem')};
`;

const Container = ({ children, defaultContainerSizes, fluid, ...props }) => {
  const containerSize = [
    null,
    ...(get(props.theme.grid, 'containerSizes') || defaultContainerSizes),
  ];
  return (
    <ContainerWrapper maxWidth={!fluid ? containerSize : null} {...props}>
      {children}
    </ContainerWrapper>
  );
};

export default withTheme(Container);

// Container.displayName = 'Container';

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  defaultContainerSizes: PropTypes.arrayOf(PropTypes.string),
};

Container.defaultProps = {
  defaultContainerSizes: ['33.75em', '45em', '60em', '71.25em'],
};
