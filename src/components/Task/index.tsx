import { Text, View } from 'react-native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

interface TaskProps {
    isDone: boolean;
}

export function Task({isDone = false}:TaskProps){
    const { COLORS } = useTheme()
    return (
        <S.TaskContainer>
            <S.ActionContainer>
                <S.DoneButton isDone={isDone} onPress={()=> {}}>
                        <Ionicons name="checkmark-sharp" color={isDone ? COLORS.GRAY_100 : 'transparent'}/>
                </S.DoneButton>
            </S.ActionContainer>

            <S.Title>
                Integer urna interdum massa libero auctor neque turpis turpis semper. semper. 
            </S.Title>

            <S.ActionContainer>
                <S.DeleteButton onPress={()=> {}}>
                    <Feather name="trash-2" size={24} color={COLORS.GRAY_300}  />
                </S.DeleteButton>
            </S.ActionContainer>
        </S.TaskContainer>
    )
}