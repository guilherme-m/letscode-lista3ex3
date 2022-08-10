
import styled from "styled-components/native"
import { variant } from 'styled-system'

type TextProps = {
  variant: 'title' | 'body'
}




export const ThemedText = styled.Text<TextProps>`

  text-align:center;
  
  ${
    variant({
      variants:{
        title:{
          fontSize:24,
          fontFamily:'RobotoMono_semibold',
          color: '#000'
        },
        body:{
          fontSize: 18,
          fontFamily: 'Raleway_regular',
          color: '#555'
        }
      }
    })
  };
 
`


// (variant({
  
//   variants: {
//     big: {
//       fontSize: 24,
//       },
//     small: {
//       fontSize: 20,
      
//     },
//   }
// }))

