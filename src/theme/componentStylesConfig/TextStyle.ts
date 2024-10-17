import { defineStyleConfig } from "@chakra-ui/react";

export const TextStyle = defineStyleConfig({
  baseStyle: {
    color: "primaryDark",
  },
  sizes: {},
  variants: {
    title: {
      color: "accent",
      fontSize: "16px",
      fontWeight: "bold",
    },
    subtitle: {
      color: "text",
      fontSize: "12px",
      fontWeight: "light",
      letterSpacing: "tight",
      lineHeight: "shorter"
    },
    schedTitle: {
      color: "subtleText",
      fontSize: "lg",
      fontWeight: "bold",
    },
  },
  defaultProps: {},
});
