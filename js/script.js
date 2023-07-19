
function calculateTotal(){
    let total = 0; 
    $(".amount").each(function() {
      total += parseFloat($(this).text());
    });
    $("#total-expenses").text(total);
}
    
  

function add_expense() {
    const name = $('#expense-name').val();
    const amount = $('#expense-amount').val();
    if (name.trim() === "" || amount.trim() === "") return;
    
    const newRow = $("<tr>"); 
    const newName = $("<td>").text(name);
    const newAmount = $("<td>").addClass("amount").text(parseFloat(amount));
    const newDelete = $("<td>").html('<i id = "delete-icon" class="fas fa-trash-alt delete-icon"></i>');
    
    newRow.append(newName);
    newRow.append(newAmount);
    newRow.append(newDelete);
    $("#todo-list").append(newRow);
    $("#expense-name").val("");
    $("#expense-amount").val("");
  
    newDelete.find('.delete-icon').click(function() {
      newRow.remove();
      calculateTotal();
    }); 
    calculateTotal();
  
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