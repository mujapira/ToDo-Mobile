import { Text, View } from 'react-native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { ITask } from '@storage/tasks/getTasks';

interface TaskProps extends ITask {
    
}

export function Task({isDone = false, title }:TaskProps){
    const { COLORS } = useTheme()
    return (
        <S.TaskContainer>
            <S.ActionContainer>
                <S.DoneButton isDone={isDone} onPress={()=> {}}>
                        <Ionicons name="checkmark-sharp" color={isDone ? COLORS.GRAY_100 : 'transparent'}/>
                </S.DoneButton>
            </S.ActionContainer>

            <S.Title isDone={isDone}>
                {title} 
            </S.Title>

            <S.ActionContainer>
                <S.DeleteButton onPress={()=> {}}>
                    <Feather name="trash-2" size={24} color={COLORS.GRAY_300}  />
                </S.DeleteButton>
            </S.ActionContainer>
        </S.TaskContainer>
    )
}