var toDoListForm = $('.to-do-list');

var newTask = toDoListForm.find('#newTask');
var inputAdd = toDoListForm.find('.to-do-submit');

var taskList = toDoListForm.find('ul');
var showCompletedCheckbox = toDoListForm.find('#showCompleted');

var taskIndex = 0;

function validateAddBtn() {
    var newTaskVal = newTask.val();

    //unlock add new task button
    if (!!newTaskVal) {
        inputAdd.attr('disabled', false);
    } else {
        inputAdd.attr('disabled', true);
    };
};

function resetAddNewTask() {
    newTask.val('');
    inputAdd.attr('disabled', false);
};

function showCompleted(e) {
    var showCompleted = e.target.checked;

    var checkboxes = toDoListForm.find('ul :checkbox');
    var uncheckedCheckboxes = checkboxes.filter( ":not(:checked)");
    var uncheckedTasks = uncheckedCheckboxes.prev();

    if(showCompleted) {
        uncheckedCheckboxes.hide();
        uncheckedTasks.hide();
    } else {
        uncheckedCheckboxes.show();
        uncheckedTasks.show();
    };
};

function addNewTask(e) {
    e.preventDefault();

    var newTaskVal = newTask.val();

    var taskListHtml = taskList.html();
    var newCheckboxHtml = '<input type="checkbox" name="task_' + taskIndex + '" value="value"/>';
    var newTaskHtml = '<li>' + newTaskVal  + '</li>' + newCheckboxHtml;
    
    taskList.html(taskListHtml.concat(newTaskHtml));
    
    taskIndex++;

    resetAddNewTask();
};

newTask.on('keyup', validateAddBtn);
showCompletedCheckbox.on('change', showCompleted);

toDoListForm.on('submit', addNewTask);