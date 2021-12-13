import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: {
          outline: "4px solid",
          outlineColor: "blue.600",
        },
      },
    },
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
