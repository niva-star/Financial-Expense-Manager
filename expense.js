let Expenses=JSON.parse(localStorage.getItem("Expenses"))||[];

function addExpense(){

let Name=document.getElementById("Name").value;
let Amount=document.getElementById("Amount").value;
let Period=document.getElementById("Period").value;

if(Name===""||Amount==="")return;

Expenses.push({Name,Amount,Period});

localStorage.setItem("Expenses",JSON.stringify(Expenses));

display();

}

function deleteExpense(i){

Expenses.splice(i,1);

localStorage.setItem("Expenses",JSON.stringify(Expenses));

display();

}

function display(){

let table=document.getElementById("table");

table.innerHTML="";

Expenses.forEach((e,i)=>{

table.innerHTML+=`

<tr>
<td>${e.Name}</td>
<td>${e.Amount}</td>
<td>${e.Period}</td>
<td><button class="Delete" onclick="DeleteExpense(${i})">Delete</button></td>
</tr>

`;

});

}

function back(){

window.location.href="index.html";

}

display();