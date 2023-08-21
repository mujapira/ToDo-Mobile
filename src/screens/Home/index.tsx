import { FlatList, ListRenderItemInfo, Text, TextInput, View } from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { useTheme } from 'styled-components/native';

import { Task } from '@components/Task';
import { EmptyTask } from '@components/EmptyTask';

type Task = {
  id: number;
  isDone: boolean;
  title: string;
}

export function Home() {
  const newTaskInputRef = useRef<TextInput>(null)
  const [newTaskName, setNewTaskName] = useState('')
  const [taskList, setTaskList] = useState<Task[]>([])
  const [doneTasksCounter, setDoneTasksCounter] = useState(0)
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0)

  function handleCheckTask(id: number){

  }
  function handleDeleteTask(id: number){

  }

  useEffect(()=> {
    setTaskList([
      {
        id: 1,
        isDone: true,
        title: "Fazer compras"
      },
      {
        id: 2,
        isDone: true,
        title: "Estudar para a prova"
      },
      {
        id: 3,
        isDone: false,
        title: "Ler livro novo"
      },
      {
        id: 4,
        isDone: true,
        title: "Ir à academia"
      },
      {
        id: 5,
        isDone: false,
        title: "Assistir filme"
      }
    ])
  },[])

  return (
    <S.Container>
      <Header />
      <S.Content>

      <S.InputContainer>
        <Input 
            inputRef={newTaskInputRef}
            onChangeText={setNewTaskName}
            value={newTaskName}
            placeholder="Adicione uma nova tarefa"
            autoCorrect={false}
            onSubmitEditing={()=> {}}
            returnKeyType="done"
          />
        <ButtonIcon 
          onPress={() => {}}
          icon="add-circle-outline"  
          />
      </S.InputContainer>

    <S.TaskListContainer>
      <S.TaskListHeader>
        <S.TasksCounter>
          <S.CreatedTasksSpan>Criadas</S.CreatedTasksSpan>
          <S.Bubble>
            <S.BubbleSpan>
              {createdTasksCounter}
            </S.BubbleSpan>
          </S.Bubble>
        </S.TasksCounter>

        <S.TasksCounter>
          <S.FinishedTasksSpan>Concluídas</S.FinishedTasksSpan>
          <S.Bubble>
            <S.BubbleSpan>
              {doneTasksCounter}
            </S.BubbleSpan>
          </S.Bubble>
        </S.TasksCounter>
      </S.TaskListHeader>


      {taskList.length > 0
        ? 
        <FlatList 
        data={taskList}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Task
            isDone={item.isDone}
            title={item.title} 
          /> 
          )}
        />  
        : 
        <EmptyTask /> 
      }

      </S.TaskListContainer>
      </S.Content>
    </S.Container>    
  );
}

