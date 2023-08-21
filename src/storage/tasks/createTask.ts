import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASKS_COLLECTION } from "@storage/storageConfig";
import { getTasks } from "./getTasks";

export async function createTask(taskTitle: string) {
    try {
        const storedTasks = await getTasks()
        const newTask = {
            id: Date.now().toString(),
            title: taskTitle,
            isDone: false
        }
        const storage = JSON.stringify([...storedTasks, newTask])
        await AsyncStorage.setItem(TASKS_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}