$(function () {

  const caseTasks = $('.js-tasks');
  const tasksListEl = $('.js-tasksList');
  const taskFormEl = $('.js-taskForm');

  function buildTask(nameTask, deskTask) {
    return `<li class="task-item js-taskItem">
              <article>
                <header class="task-header clearfix">
                  <h3 class="task-header-name">${nameTask}</h3>

                  <button class="task-delete"></button>

                  <button class="task-arrow task-show"></button>
                </header>

                <p class="task-body hide-body">${deskTask}</p>
              </article>
            </li>`;
  }
});
