import { Text } from "react-native"
import styled from "styled-components/native"



type CustomTypographyProps = {
  font?: "Roboto Mono" | "Raleway"
  weight?: "light" | "regular" | "semibold" | "bold"
  children: string
}

export const CustomTypography = ({
  font,
  weight,
  children
}: CustomTypographyProps) => {
  
  // const StyledText = styled.View`
  //   background-color: 'blue'
  // `;
  
  return <Text>{children}</Text>
  
}

