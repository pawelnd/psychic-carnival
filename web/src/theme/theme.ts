import { extendTheme } from '@chakra-ui/react';
import {Button} from "./Button";

const theme = extendTheme({
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
  },
  backGroundColor: 'red.900'
});
export default theme;
