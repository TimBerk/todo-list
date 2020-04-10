$(function () {

  const caseTasksEl = $('.js-tasks');
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

  function checkIsTaskLestEmpty() {
    // Удаление отступов и текса, если в списке есть задачи
    if(tasksListEl.children('.js-taskItem').length > 0) {
      $('.empty-list-text').remove();
      caseTasksEl.removeClass('empty-list');
      taskFormEl.removeClass('task-form-empty-list');
    }

    // Добавление отступов и текса, если в списке нет задач
    if(tasksListEl.children('.js-taskItem').length === 0) {
      caseTasksEl.prepend('<p class="empty-list-text">Список пуст...</p>');
      caseTasksEl.addClass('empty-list');
      taskFormEl.addClass('task-form-empty-list');
    }
  }

  taskFormEl.submit(function( event ) {
    event.preventDefault();

    let target = event.target;
    let taskName = $('.task-name').val();
    let taskDesk = $('.task-desk').val();
    let newTaskEl = buildTask(taskName, taskDesk);
    tasksListEl.prepend(newTaskEl);

    target.reset(); // Сброс формы
    checkIsTaskLestEmpty(); // Проверка списка задач
  });
});
