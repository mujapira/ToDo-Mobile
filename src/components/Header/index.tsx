import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import logoImg from '@assets/logo.png';


export function Header() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }


  return (
    <S.Container>
        <S.ButtonWrapper onPress={handleGoBack}>
          <S.Logo source={logoImg} />
        </S.ButtonWrapper>
    </S.Container>
  )
} 