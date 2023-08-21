import { Alert, Text, View } from 'react-native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { ITask } from '@storage/tasks/getTasks';

interface TaskProps extends ITask {
    deleteTask: (id: string) => void;
    updateTask: (id: string) => void;
}


export function Task({isDone = false, title, id, deleteTask, updateTask }:TaskProps){
    const { COLORS } = useTheme()

      
    return (
        <S.TaskContainer>
            <S.ActionContainer>
                <S.DoneButton isDone={isDone} onPress={()=> {
                    try {
                        Alert.alert(
                            'Concluir',
                            'Deseja marcar essa tarefa como concluída?',
                            [
                                {text: 'Não', style:"default"},
                                {text: 'Sim', onPress: () => updateTask(id!)}
                            ])}
                    catch (error) {
                        Alert.alert('Erro ao remover grupo', 'Erro ao remover o grupo selecionado')
                    }}}>
                        <Ionicons name="checkmark-sharp" color={isDone ? COLORS.GRAY_100 : 'transparent'}/>
                </S.DoneButton>
            </S.ActionContainer>

            <S.Title isDone={isDone}>
                {title} 
            </S.Title>

            <S.ActionContainer>
                <S.DeleteButton onPress={()=>
                    { try {
                        Alert.alert(
                            'Deletar',
                            'Deseja excluir esse grupo?',
                            [
                                {text: 'Não', style:"cancel"},
                                {text: 'Sim', onPress: () => deleteTask(id!)}
                            ])}
                    catch (error) {
                        Alert.alert('Erro ao remover grupo', 'Erro ao remover o grupo selecionado')
                    }}}>
                    <Feather name="trash-2" size={24} color={COLORS.GRAY_300}  />
                </S.DeleteButton>
            </S.ActionContainer>
        </S.TaskContainer>
    )
}