function tasksItemComponent(task) {
  // You are going to add your HTML design here.
  // Do the option design in HTML page, test it, and replace it if you need instead of this code.
  // For any variables, just use the interpolation operation ${} and pass the variable
  const checked = task.done ? "checked" : "";
  return `
                  <ul class="list-group mb-0">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div class="d-flex align-items-center">
                      <div class="todo-item">
                        <input 
                          class="task-checkbox"
                          type="checkbox"
                          ${checked} 
                          onchange="taskChecked(${task.id}, this.checked)"
                        />
                        <div className="movie-details">
                          <p class="item-category">${task.category}</p>
                          <p class="item-title">${task.title}</p>
                        </div>
                        
                      </div>
                      </div>
                   </li>
      `;
}
