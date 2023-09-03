import { ITask, ITaskRepository } from "../entities"

export function listTasks(taskRepository: ITaskRepository): ITask[] {
  return taskRepository.list()
}
