export interface ITask {
  title: string;
  completed: boolean;
}

export interface ITaskRepository {
  add(task: ITask): void;
  list(): ITask[];
}
