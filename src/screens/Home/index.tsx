import { Text, TextInput, View } from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { useRef, useState } from 'react';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { useTheme } from 'styled-components/native';

import { Task } from '@components/Task';
import { EmptyTask } from '@components/EmptyTask';

type Task = {
  id: number;
  name: string;
  status: "DONE" |  "TODO";
}

export function Home() {
  const newTaskInputRef = useRef<TextInput>(null)
  const [newTaskName, setNewTaskName] = useState('')
  const [taskList, setTaskList] = useState<Task[]>([])
  const [doneTasksCounter, setDoneTasksCounter] = useState(0)
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0)

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

    <S.TaskList>
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
        ? <Task isDone={true}/>  
        : <Task isDone={true}/> 
      }

      </S.TaskList>
      </S.Content>
    </S.Container>    
  );
}

