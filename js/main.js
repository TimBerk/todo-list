$(function () {

  function isEmptyTaskList() {
    let containerTasks = $('.tasks');
    let tasks = $('.task-item');
    if (tasks.length > 0 && containerTasks.css('paddingTop') === '30px') {
      $('.tasks').css({'paddingTop': '0px'});
      $('.task-form').css({'paddingTop': '32px'});
      $('.empty-list').remove();
    }
  }

  function fillTask(name, desk) {
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

  $(".task-form").validate({
    errorElement: 'span',
    rules: {
      taskName: {
        required: true,
        minlength: 5
      },
      taskDesk: {
        required: true,
        minlength: 5,
      }
    },
    submitHandler: function(form, event) {
      event.preventDefault();

      let name = $('.task-name').val();
      let desk = $('.task-desk').val();
      let newTask = fillTask(name, desk);

      $('.task-list').prepend(newTask);
      $('.task-name').val('');
      $('.task-desk').val('');
      isEmptyTaskList();
    }
  });

  $(document).on('click', '.task-delete', function () {
    $(this).parent().parent().remove();
    let tasks = $('.task-item').length;
    if (tasks === 0) {
      $('.tasks').css({'paddingTop': '30px'});
      $('.task-form').css({'paddingTop': '50px'});
      $('.tasks').prepend('<p class="empty-list">Список пуст...</p>');
    }
  });

  $(document).on('click', '.task-arrow', function () {
    let task = $(this).parent().parent();
    let taskBody = $(task).find('.task-body');
    let taskArrow = $(task).find('.task-arrow');

    taskArrow.toggleClass('task-hide task-show');
    taskBody.toggleClass('hide-body');
  });

});
