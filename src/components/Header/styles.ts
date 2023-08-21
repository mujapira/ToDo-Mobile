import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.COLORS.GRAY_700};
  padding: 24px;

`;

export const Logo = styled.Image`

  height: 32px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
`

export const Icon = styled(CaretLeft).attrs(props => ({
  size: 32,
  color: props.theme.COLORS.GRAY_100
}))`

`;