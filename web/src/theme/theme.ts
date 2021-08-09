import { extendTheme } from '@chakra-ui/react';


const theme =  extendTheme({
  colors: {
    primary: "#CA1A1A",
    secondary: "#BC0755",
    highlight: "#94317A",
    warning: "#5F4684",
    danger: "#344C75",
  },
  defaultProps: {
    variant: "primary",
  },

})
export default theme;
