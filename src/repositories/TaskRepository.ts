import { ITask, ITaskRepository } from "../entities"
export class TaskRepository implements ITaskRepository {
  private tasks: ITask[] = []
  add(task: ITask): void {
    this.tasks.push(task)
  }
  list(): ITask[] {
    return this.tasks
  }
}
