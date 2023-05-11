import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = {
    sm: "400px",
    md: "720px",
    lg: "1080px",
    xl: "1440px",
    "2xl": "2560px",
};

const theme = extendTheme({
    breakpoints,

    fonts: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
    },

    //Custom brand / clients colors.
    colors: {
        bkColor: "#ebe7dd",
        mainColor: "#25347a",
        secColor: "#B4B6C1",
        thirdColor: "#e0a344",
        hiColor: "#f05423",
    },

    // Light mode / dark mode colors.
    styles: {
        global: (props) => ({
            "html, body": {
                background: mode("#ebe7dd", "#25347a")(props), //mode(light mode color, dark mode color)
            },
        }),
    },
});

export default theme;
