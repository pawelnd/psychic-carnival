export const Button = {
  variants: {
    primary: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: 'secondary',
        _disabled: {
          bg: 'secondary'
        }
      }
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary',
    color: 'white'
  }
};
