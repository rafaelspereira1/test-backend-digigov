interface Task {
	title: string;
	completed: boolean;
}

const tasks: Task[] = [];

function addTask(title: string): void {
	const task: Task = {
		title,
		completed: false,
	};
	tasks.push(task);
}

function listTasks(): Task[] {
	return tasks;
}

// Uso do código atual
addTask("Ler livro");
addTask("Fazer compras");
console.log(listTasks());
