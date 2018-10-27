import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  height,
  borderRadius,
  themed,
} from '../../helpers/extended-styled-system';
import { BoxWrapper } from '../../helpers/styled-utility';

const ImageWrapper = styled(BoxWrapper)(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  borderRadius,
  themed('ImageWrapper')
);

const Image = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

export default Image;

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes,
};

Image.defaultProps = {
  as: 'img',
  m: 0,
  // maxWidth: '100%',
  // height: 'auto'
};
