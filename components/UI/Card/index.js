const cards = variant({ key: 'cards' });

export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  themed('Card'),
  cards
);

Card.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...cards.propTypes,
};
