// Implementação refatorada

interface Task {
	title: string;
	completed: boolean;
}

interface TaskRepository {
	add(task: Task): void;
	list(): Task[];
}

class InMemoryTaskRepository implements TaskRepository {
	private tasks: Task[] = [];

	add(task: Task): void {
		this.tasks.push(task);
	}

	list(): Task[] {
		return this.tasks;
	}
}

function createTask(taskRepository: TaskRepository, title: string): void {
	const task: Task = {
		title,
		completed: false,
	};
	taskRepository.add(task);
}

function getTasks(taskRepository: TaskRepository): Task[] {
	return taskRepository.list();
}

// Uso do código refatorado
const taskRepository = new InMemoryTaskRepository();

createTask(taskRepository, "Ler livro");
createTask(taskRepository, "Fazer compras");
console.log(getTasks(taskRepository));
