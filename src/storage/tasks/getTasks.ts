import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASKS_COLLECTION } from "@storage/storageConfig";

export interface ITask {
    id?: string;
    isDone: boolean;
    title: string;
}

export async function getTasks() {
    const storage = await AsyncStorage.getItem(TASKS_COLLECTION)

    const tasks: ITask[] = storage ? JSON.parse(storage) : []

    return tasks
}