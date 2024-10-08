import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { ButtonStyle } from "./componentStylesConfig/ButtonStyle";
import { lightTheme } from "./lightTheme";
import { InpuStyle } from "./componentStylesConfig/InpuStyle";
import { TextStyle } from "./componentStylesConfig/TextStyle";
import { SelectStyle } from "./componentStylesConfig/SelectStyle";
import { CardStyle } from "./componentStylesConfig/CardStyle";

const theme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: true,
    colors: { ...lightTheme.colors },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: ButtonStyle,
      Input: InpuStyle,
      Text: TextStyle,
      Select: SelectStyle,
      Card: CardStyle,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Input", "Checkbox"],
  }),
  withDefaultVariant({
    variant: "outline",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;
