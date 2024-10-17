import { darkenHexColor } from "../../../../../utils/darkenHexcolor";

export const styleAsInputAddOn = {
    color: "text",
    bg: "#EFEFEF",
    border: "0.0625rem solid",
    borderColor: "inherit",
    boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
    cursor: "default",
    height: "2.75rem",
};

export const styleAsTextArea = {
    backgroundColor: "background",
    borderRadius: "0.25rem",
    boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
    border: "1px",
    borderColor: "#EFEFEF",
    color: "text",
    _focus: {
        borderColor: "primary",
    },
    _hover: {
        backgroundColor: "background",
    },
};

export const styleAsMenuSelect = {
    '&::-webkit-scrollbar': {
        width: '0.475rem',
    },
    '&::-webkit-scrollbar-track': {
        background: 'surface',
    },
    '&::-webkit-scrollbar-thumb': {
        background: "primary",
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: darkenHexColor("#0872F9", 0.2),
    },
};

export const styleAsMenuItem = {
    _hover: {
        backgroundColor: "primary",
        color: "background",
    },
};