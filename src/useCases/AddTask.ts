import { ITask, ITaskRepository } from "../entities"
export function addTask(title: string, taskRepository: ITaskRepository): void {
  const task: ITask = {
    title,
    completed: false,
  }
  taskRepository.add(task)
}
