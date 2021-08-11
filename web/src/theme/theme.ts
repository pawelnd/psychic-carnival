import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import {Button} from "./Button";

const config = {
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  colors: {
    primary: '#CA1A1A',
    secondary: '#BC0755',
    highlight: '#94317A',
    warning: '#5F4684',
    danger: '#344C75'
  },
  defaultProps: {
    variant: 'primary'
  },
  components: {
    Button
  }
}
const theme = extendTheme(config);
export default theme;
