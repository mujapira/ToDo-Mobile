import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'


export const Container = styled.View`
  width: 100%;
  background-color: ${props => props.theme.COLORS.GRAY_700};
  padding: 72px 24px;
`;

export const Logo = styled.Image`
  height: 32px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
    align-items: center;
  justify-content: center;
`