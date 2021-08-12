import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import {Button} from "./Button";



const config = {
  ...withDefaultColorScheme({ colorScheme: 'whattsap' }),
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
  components: {
    Button
  }
}
const theme = extendTheme(config);
export default theme;
