import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      img: {
        objectFit: "cover",
      },
    },
  },
  components: {
    Button: {},
    Input: {
      baseStyle: {
        _focus: {
          outline: "4px solid",
          outlineColor: "blue.600",
        },
      },
    },
  },
});
