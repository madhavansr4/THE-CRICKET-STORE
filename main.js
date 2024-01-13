function submit1() 
{
    var name = document.getElementById("name").value;
    var phone = document.getElementById("ph").value;
    var email = document.getElementById("email").value;
    
    var table = document.getElementById("datatable");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
  
    
    cell1.textContent = name;
    cell2.textContent = phone;
    cell3.textContent = email;
    
    document.getElementById("form1").reset()


}