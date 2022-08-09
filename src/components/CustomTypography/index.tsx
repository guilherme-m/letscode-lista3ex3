import { TextProps } from "react-native"
import styled from "styled-components/native"

type CustomTypographyProps = {
  font: "RobotoMono" | "Raleway"
  weight: "light" | "regular" | "semibold" | "bold"
}

export const CustomTypography = ({
  font,
  weight,
  ...props
}: CustomTypographyProps & TextProps) => {
  
  
  const StyledText = StyledTexts(font, weight)
  
  return <StyledText>{props.children}</StyledText>
  
}


const StyledTexts = (font: string, weight: string) => styled.Text`
  
  font-family: ${[font, weight].join('_')};
  font-size: ${!!weight.match(/.+bold/g) ? 25 : 20}px;
  text-align: center

`