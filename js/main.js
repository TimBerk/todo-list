$(function () {

  let containerTasks = $('.tasks');
  let caseElForm = $('.task-form');

  function checkEmptyTaskList(){
    let taskEls = $('.task-item');

    if (taskEls.length === 0 && !containerTasks.hasClass('empty-list')) {
      containerTasks.prepend('<p class="empty-list-text">Список пуст...</p>');
      containerTasks.addClass('empty-list');
      caseElForm.addClass('task-form-empty-list');
    } else {
      $('.empty-list-text').remove();
      containerTasks.removeClass('empty-list');
      caseElForm.removeClass('task-form-empty-list');
    }
  }

  function buildTask(name, desk) {
    checkEmptyTaskList();

    return `<li class="task-item">
              <article>
                <header class="task-header clearfix">
                  <h3 class="task-header-name">${name}</h3>

                  <button class="task-delete"></button>

                  <button class="task-arrow task-show"></button>
                </header>

                <p class="task-body hide-body">${desk}</p>
              </article>
            </li>`;
  }

  $(".task-form").submit(function(event){
    event.preventDefault();

    let name = $('.task-name').val();
    let desk = $('.task-desk').val();
    let newTaskEl = buildTask(name, desk);

    $('.task-list').prepend(newTaskEl);
    $('.task-name').val('');
    $('.task-desk').val('');

    checkEmptyTaskList();
  });

  $(document).on('click', '.task-delete', function (event) {
    let target = event.target;
    target.closest('li').remove();
    checkEmptyTaskList();
  });

  $(document).on('click', '.task-arrow', function (event) {
    let target = event.target.closest('li');
    let taskBody = $(target).find('.task-body');
    let taskArrow = $(target).find('.task-arrow');

    taskArrow.toggleClass('task-hide task-show');
    taskBody.toggleClass('hide-body');
  });

});
