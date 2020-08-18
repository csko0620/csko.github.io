var button = document.getElementById("create");
var input = document.getElementById("input");
var list = document.getElementById("list");
var todolist = JSON.parse(localStorage.getItem("list")) || [];
/*parse出現了!!!!!!!*/
render();

function addData()
{
  if(input.value !="")
    {
      todolist.push(input.value);
      input.value="";
       render();
 /*如果說想要設定成空白自步行新增就在這邊新增*/
    }
  else if(input.value ==0)
  {
    list.innerHTML = "請輸入字元";
  }
}

 /*id="delete" onclick="del()"*/



function del(i)
{
  todolist.splice(i,1);
  alert("確定要刪除嘛!?");
render();
}


function render()
{
localStorage.setItem("list",JSON.stringify(todolist));/*這邊也可以存起來*/
var con="";
for(var i=0;i<todolist.length;i++)
  {   
    con =con+"<div>"+todolist[i]+"</div>"+"<button class='dee' onclick='del("+i+")'>刪除事項</button>";
    /*不適所有函數都在上面才能宣告，而是這邊就可以宣告了!!!delData(${i}還有這種寫法*/
  }
list.innerHTML = con;
 
}