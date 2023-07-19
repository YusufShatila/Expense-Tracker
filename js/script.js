function add_expense() {
    const name = $('#expense-name').val();
    const amount = $('#expense-amount').val();
    if (name.trim() === "" || amount.trim() === "") return;
    
    const newRow = $("<tr>");
    const newName = $("<td>").text(name);
    const newAmount = $("<td>").text(amount);
    const newDelete = $("<td>").html('<i class="fas fa-trash-alt delete-icon"></i>');
    
    newRow.append(newName);
    newRow.append(newAmount);
    newRow.append(newDelete);
    $("#todo-list").append(newRow);
    $("#expense-name").val("");
    $("#expense-amount").val("");
  
    newDelete.find('.delete-icon').click(function() {
      newRow.remove();
    }); 
  
  }

  $(document).ready(function () {
    const addButton = $("#add-button"); 
    addButton.click(add_expense); 
    $("#todo-input").keyup(function (event) {
      if (event.keyCode === 13) {
  addTodoItem();
}
    });
  });