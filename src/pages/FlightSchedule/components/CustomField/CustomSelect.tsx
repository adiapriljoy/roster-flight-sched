import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlProps,
  InputProps,
  FormErrorMessage,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import useResizeObserver from "../../../../hooks/useResizeObserver";
import { styleAsMenuItem, styleAsMenuSelect } from "./styles";

interface SelectOption {
  code?: string;
  name?: string;
}

interface CustomSelectProps<T extends SelectOption> extends Omit<FormControlProps, "onChange"> {
  label?: string;
  id: string;
  placeholder?: string;
  value?: string;
  selectVariant?: InputProps["variant"];
  labelVariant?: InputProps["variant"];
  options?: T[] | undefined;
  errors?: any;
  onChange?: (value: string) => void;
}

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps<SelectOption>>(
  (
    {
      label,
      id,
      placeholder,
      value,
      selectVariant = "ghost",
      labelVariant = "title",
      options = [],
      errors,
      onChange,
      ...formControlProps
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState<string>(placeholder ?? '');
    const { ref: buttonRef, width: buttonWidth } = useResizeObserver();
    const { isOpen, onToggle } = useDisclosure();

    return (
      <FormControl {...formControlProps} isInvalid={!!errors}>
        <FormLabel htmlFor={id} variant={labelVariant}>
          {label}
        </FormLabel>
        <Menu isOpen={isOpen} onOpen={onToggle} onClose={onToggle}>
          <MenuButton
            as={Button}
            borderColor={!!errors ? "danger" : "#EFEFEF"}
            variant="select"
            rightIcon={
              isOpen ? <ChevronUpIcon color="primary.600" /> : <ChevronDownIcon />
            }
            id={id}
            ref={buttonRef}
          >
            {value || selectedValue || placeholder}
          </MenuButton>
          <MenuList
            width={buttonWidth}
            maxHeight="15rem"
            overflowY="auto"
            sx={styleAsMenuSelect}
          >
            {options.map((option) => (
              <MenuItem
                key={option.code || option.name}
                sx={{
                  ...styleAsMenuItem,
                  backgroundColor:
                    selectedValue === (option.code || option.name) ? "primary.600" : "transparent",
                  color: selectedValue === (option.code || option.name) ? "background" : "text",
                }}
                onClick={() => {
                  const selected = option.code || option.name || '';
                  setSelectedValue(selected);
                  onChange?.(selected);
                  onToggle;
                }}
              >
                {option.code || option.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        {errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default CustomSelect;
