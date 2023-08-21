import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as S from "./styles";
import { useTheme } from "styled-components/native";

export function EmptyTask(){
const { COLORS } = useTheme()

return(
    <S.Container>
        <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={56} color={COLORS.GRAY_400}/>
        <View>
            <S.BoldSpan>Você ainda não tem tarefas cadastradas</S.BoldSpan>
            <S.Span>Crie tarefas e organize seus itens a fazer</S.Span>
        </View>
    </S.Container>
    )
}