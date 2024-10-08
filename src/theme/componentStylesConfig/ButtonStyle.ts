import { defineStyleConfig } from "@chakra-ui/react";
import { darkenHexColor } from "../../utils/darkenHexcolor";

export const ButtonStyle = defineStyleConfig({
  baseStyle: {
    borderRadius: 4,
    _focus: {
      ring: 2,
      ringColor: "primary",
    },
  },
  sizes: {},
  variants: {
    solid: {
      bg: "primary", 
      color: "pureWhite",
        
      _loading: {
        backgroundColor: "primary", 
        cursor: "not-allowed", 
      }, 

      _focus: {
        ring: 1,
        borderRadius: 6,
        ringColor: "primary",
      },

      _hover: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
        borderColor: "primary",
      },

      _active: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
      },

      _disabled: {
        _hover: {
          backgroundColor: "primary",
        },
      },
    },
    rounded: {
      bg: "primary", 
      color: "pureWhite",
      borderRadius: 50,
        
      _loading: {
        backgroundColor: "primary", 
        cursor: "not-allowed", 
        _hover:{
          backgroundColor: "primary",
        }
      }, 

      _focus: {
        ring: 1,
        ringColor: "primary",
      },

      _hover: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
        borderColor: "primary",
      },

      _active: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
      },

      _disabled: {
        _hover: {
          backgroundColor: "primary",
        },
      },
    },
    link: {
      _focus:{
        border: "none",
        outline: "none",
      },
      _active: {
        border: "none",
        outline: "none",
      }
    },
  },
  defaultProps: { colorScheme: "primary" },
});
