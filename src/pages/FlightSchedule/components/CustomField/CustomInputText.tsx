import React, { ReactNode } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormControlProps,
  InputProps,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { styleAsInputAddOn } from "./styles";

interface CustomInputProps extends FormControlProps {
  label?: string;
  id?: string;
  placeholder?: string;
  inputType?: string;
  inputVariant?: InputProps["variant"];
  labelVariant?: InputProps["variant"];
  value?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errors?: any;
  field?: any;
  formLabel?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const CustomInputText = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      id,
      placeholder,
      inputType = "text",
      inputVariant = "ghost",
      labelVariant = "title",
      value,
      leftAddon,
      rightAddon,
      leftIcon,
      rightIcon,
      errors,
      field,
      formLabel = true,
      disabled = false,
      onChange,
      ...formControlProps
    },
    ref
  ) => {
    return (
      <FormControl {...formControlProps} isInvalid={!!errors}>
        {formLabel && (
          <FormLabel htmlFor={id} variant={labelVariant}>
            {label}
          </FormLabel>
        )}
        <InputGroup>
          {leftAddon && (
            <InputLeftAddon sx={styleAsInputAddOn}>{leftAddon}</InputLeftAddon>
          )}
          {leftIcon && (
            <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
          )}
          <Input
            id={id}
            type={inputType}
            placeholder={placeholder}
            variant={inputVariant}
            value={value}
            disabled={disabled}
            onChange={onChange}
            ref={ref}
          />
          {rightIcon && (
            <InputRightElement pointerEvents="none" sx={{
              color: "text",
              _groupFocusWithin: {
                color: "primary.600",
              },
            }}>
              {rightIcon}
            </InputRightElement>
          )}
          {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
        </InputGroup>
        {errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default CustomInputText;
