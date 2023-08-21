import { Alert, FlatList, ListRenderItemInfo, Text, TextInput, View } from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';

import { Task } from '@components/Task';
import { EmptyTask } from '@components/EmptyTask';
import { createTask } from '@storage/tasks/createTask';
import { AppError } from '@utils/AppError';
import { getTasks } from '@storage/tasks/getTasks';

import { ITask } from '@storage/tasks/getTasks';

export function Home() {
  const newTaskInputRef = useRef<TextInput>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [newTaskName, setNewTaskName] = useState<string>()
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [doneTasksCounter, setDoneTasksCounter] = useState(0)
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0)

  async function fetchTasks() {
    try {
      setIsLoading(true)
      const data = await getTasks()
      setTaskList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddNewTask(){
    try {
        if (newTaskName!.trim().length === 0) {
          return Alert.alert('Home', 'A task não pode ser vazia')
        }
        await createTask(newTaskName!)
        setNewTaskName('')

    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Home', error.message)
      } else {
        Alert.alert('Home', 'Erro ao criar task')
        console.log(error)
      }
    }
  }

  function handleCheckTask(id: number){

  }

  function handleDeleteTask(id: number){

  }

  useEffect(()=> {
    fetchTasks()
  },[taskList])

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
            onSubmitEditing={()=> handleAddNewTask()}
            returnKeyType="done"
          />
        <ButtonIcon 
          onPress={() => handleAddNewTask()}
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

