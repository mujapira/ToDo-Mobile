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
import { deleteTask } from '@storage/tasks/deleteTask';
import { updateTask } from '@storage/tasks/updateTask';

export function Home() {
  const newTaskInputRef = useRef<TextInput>(null)
  const [isLoading, setIsLoading] = useState(true)
  const newTaskNameInputRef = useRef<TextInput>(null)
  const [newTaskName, setNewTaskName] = useState<string>()
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [doneTasksCounter, setDoneTasksCounter] = useState(0)
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0)

  async function fetchTasks() {
    try {
      setIsLoading(true)
      const data = await getTasks()
      let doneCount = 0;
      taskList.forEach(task => {
        if (task.isDone) {
            doneCount++;
        }
      });
      setDoneTasksCounter(doneCount);
      setCreatedTasksCounter(data.length);
      setTaskList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddNewTask(){
    try {
        setIsLoading(true)
        if (newTaskName!.trim().length === 0) {
          return Alert.alert('Home', 'A task não pode ser vazia')
        }
        await createTask(newTaskName!)
        setNewTaskName('')
        newTaskNameInputRef.current?.blur()

    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Home', error.message)
      } else {
        Alert.alert('Home', 'Erro ao criar task')
        console.log(error)
      }
    } finally {
      setIsLoading(false)
    }
  }


  async function handleDeleteTask(taskId: string) {
    try {
      setIsLoading(true)
      await deleteTask(taskId)
    } catch (error) {
      Alert.alert('Home', 'Erro ao remover a pessoa selecionada')
    } finally {
      setIsLoading(false)
    }
  }
  

  async function handleUpdateTask(id: string){
    try {
      setIsLoading(true)
     await updateTask(id)
    } catch {
      Alert.alert('Home', 'Erro ao atualizar o estado da tarefa')
    } finally {
      setIsLoading(false)
    }
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
            inputRef={newTaskNameInputRef}
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
            deleteTask={() => handleDeleteTask(item.id!)}
            updateTask={() => handleUpdateTask(item.id!)}
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

