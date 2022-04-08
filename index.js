// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.. nevermind
  // You are given the task id
  tasks.find((task) => task.id === taskId).done = true;
  renderTasks(tasks, "tasks-list");
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  let newTask = {};
  newTask.id = tasks.length;
  newTask.title = taskTitle;
  newTask.category = selectedCategory;
  newTask.done = false;
  tasks.push(newTask);
  renderTasks(tasks, "tasks-list");
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  let filteredTasks = [];
  if (done === true) {
    filteredTasks = tasks.filter(
      (task) => task.category === selectedCategory && task.done === true
    );
  } else {
    filteredTasks = tasks.filter((task) => task.category === selectedCategory);
  }
  renderTasks(filteredTasks, "tasks-list");
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
