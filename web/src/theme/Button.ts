export const Button = {
    baseStyle: {},
    sizes: {},
    variants: {
        primary: () => ({
            bg: "primary", // Notice the use of color directly here
            color: "white",
            _hover: {
                // Notice the use of `mode` function to change color
                // based on theme color mode
                bg: 'secondary',
                boxShadow: "md",
            },
        }),
        defaultProps: {},
    }
};
