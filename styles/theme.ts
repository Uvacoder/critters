import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      img: {
        objectFit: "cover",
      },
      body: {
        fontFamily: "Poppins",
      },
      legend: {
        fontSize: "lg",
        color: "gray.500",
      },
    },
  },
  components: {
    Button: {},
    FormLabel: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "xs",
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
