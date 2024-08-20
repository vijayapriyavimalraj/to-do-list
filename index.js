const newtaskinput = document.getElementById("newtask-input");
const listcontainer = document.getElementById("list-container ");
const actionsd = document.getElementById("actions");
function addTask(task)
{
    if(newtaskinput.value === '')
    {
        alert("you must write something!");
    }
    else
    {
let li=document.createElement("li");
li.innerHTML=newtaskinput.value;
listcontainer.appendChild(li);

    }
    newtaskinput="";
}