import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";



export const TaskContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    background-color: ${props => props.theme.COLORS.GRAY_500};
    border-radius: 8px;
`

export const Title = styled.Text`
    color: ${props => props.theme.COLORS.GRAY_100};
    flex: 1;
    padding: 0 8px;
`

export const ActionContainer = styled.View`
    align-items: center;
    justify-content: center;
`

type DoneButtonProps = {
    isDone: boolean;
  }

export const DoneButton = styled(TouchableOpacity)<DoneButtonProps>`
    border: 2px solid ${props => props.isDone ? props.theme.COLORS.PURPLE_DARK : props.theme.COLORS.BLUE};
    border-radius: 50px;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isDone ? props.theme.COLORS.PURPLE_DARK : 'transparent'};
   
`

export const DeleteButton = styled.TouchableOpacity`
    padding: 8px;
    align-items: center;
    justify-content: center;
`