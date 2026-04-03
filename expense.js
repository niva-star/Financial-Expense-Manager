let expenses=JSON.parse(localStorage.getItem("expenses"))||[];

function addExpense(){

let name=document.getElementById("name").value;
let amount=document.getElementById("amount").value;
let period=document.getElementById("period").value;

if(name===""||amount==="")return;

expenses.push({name,amount,period});

localStorage.setItem("expenses",JSON.stringify(expenses));

display();

}

function deleteExpense(i){

expenses.splice(i,1);

localStorage.setItem("expenses",JSON.stringify(expenses));

display();

}

function display(){

let table=document.getElementById("table");

table.innerHTML="";

expenses.forEach((e,i)=>{

table.innerHTML+=`

<tr>
<td>${e.name}</td>
<td>${e.amount}</td>
<td>${e.period}</td>
<td><button class="delete" onclick="deleteExpense(${i})">Delete</button></td>
</tr>

`;

});

}

function back(){

window.location.href="index.html";

}

display();