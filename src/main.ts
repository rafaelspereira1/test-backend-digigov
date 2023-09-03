import { TaskRepository } from "./repositories";
import { addTask, listTasks } from "./useCases";

const taskRepository = new TaskRepository();
addTask("Ler livro", taskRepository);
addTask("Fazer compras", taskRepository);
console.log(listTasks(taskRepository));
