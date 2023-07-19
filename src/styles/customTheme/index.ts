import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import { components } from "./components";
import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  components,
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      "*::selection": {
        color: mode("#fff", "rgb(17, 17, 17)")(props),
        background: mode(
          "rgb(17, 17, 17) none repeat scroll 0% 0%",
          "rgb(255, 255, 255) none repeat scroll 0% 0%"
        )(props),
      },

      body: {
        fontFamily: "body",
        color: mode("#212529", "#f8f9fa")(props),
        bg: mode("#f8f9fa", "#111111")(props),
        lineHeight: "base",
      },
    }),
  },
});

export default customTheme;
