import { defineStyleConfig } from "@chakra-ui/react";
import { darkenHexColor } from "../../utils/darkenHexcolor";

export const ButtonStyle = defineStyleConfig({
  baseStyle: {
    borderRadius: 4,
    _focus: {
      ring: 2,
      ringColor: "primary.600",
    },
  },
  sizes: {},
  variants: {
    solid: {
      bg: "primary.600", 
      color: "pureWhite",
        
      _loading: {
        backgroundColor: "primary.600", 
        cursor: "not-allowed", 
      }, 

      _focus: {
        ring: 1,
        borderRadius: 6,
        ringColor: "primary.600",
      },

      _hover: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
        borderColor: "primary.600",
      },

      _active: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
      },

      _disabled: {
        _hover: {
          backgroundColor: "primary.600",
        },
      },
    },
    rounded: {
      bg: "primary.600", 
      color: "pureWhite",
      borderRadius: 50,
        
      _loading: {
        backgroundColor: "primary.600", 
        cursor: "not-allowed", 
        _hover:{
          backgroundColor: "primary.600",
        }
      }, 

      _focus: {
        ring: 1,
        ringColor: "primary.600",
      },

      _hover: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
        borderColor: "primary.600",
      },

      _active: {
        backgroundColor: darkenHexColor("#0078D4", 0.2),
      },

      _disabled: {
        _hover: {
          backgroundColor: "primary.600",
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
    select: {
      borderRadius: "0.25rem",
      boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
      border: "1px",
      borderColor: "#EFEFEF",
      height: "2.75rem",
      width: "100%",
      textAlign: "left",
      fontWeight: "normal",
      color: "text",
      _active: {
        borderRadius: "0.25rem",
        boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
        border: "1px",
        borderColor: "primary.600",
      },
      _focus: {
        ring: "none",
        boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
      },
      _invalid: {
        borderColor: "danger",
      }
    },
  },
  defaultProps: { colorScheme: "primary.600" },
});
