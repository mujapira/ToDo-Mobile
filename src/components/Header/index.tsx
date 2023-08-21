import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
  isButtonVisible?: boolean;
}

export function Header({isButtonVisible = false} : Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }


  return (
    <S.Container>
      {
        isButtonVisible && 
        <S.ButtonWrapper onPress={handleGoBack}>
          <S.Icon />
        </S.ButtonWrapper>
      }
      <S.Logo source={logoImg} />
    </S.Container>
  )
} 