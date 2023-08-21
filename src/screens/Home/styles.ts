import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native"


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${props => props.theme.COLORS.GRAY_600};
    padding: 24px;
    padding-top: 56px;
    position: relative;
`;

export const InputContainer = styled.View`
    flex: 1;
    flex-direction: row;
    gap: 4px;
    position: absolute;
    top: -28px;
    left: 0;
    right: 0;
    margin: 0 24px;
`;

export const TaskListContainer = styled.View`
    flex: 1;
    gap: 20px;
    justify-content: start;
`
type Task = {
    id: number;
    isDone: boolean;
    title: string;
  }


export const TaskListHeader = styled.View`
    flex-direction: row;
    padding: 20px 0;
    border-bottom-width: 2px;
    border-color: ${props => props.theme.COLORS.GRAY_500};
    align-items: center; 
    justify-content: space-between;
`

export const TasksCounter = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

export const CreatedTasksSpan = styled.Text`
    color: ${props => props.theme.COLORS.BLUE};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`

export const FinishedTasksSpan = styled.Text`
    color: ${props => props.theme.COLORS.PURPLE};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`

export const Bubble = styled.View`
    background-color: ${props => props.theme.COLORS.GRAY_400};
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    border-radius: 50px;
`

export const BubbleSpan = styled.Text`
    color: ${props => props.theme.COLORS.GRAY_200};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`