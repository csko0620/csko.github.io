var button = document.getElementById("create");
var input = document.getElementById("input");
var list = document.getElementById("list");
var todolist = JSON.parse(localStorage.getItem("listItems")) || [];
/*parse出現了!!!!!!!*/


function addData()
{
  if(input.value !=0)
    {todolist.push(input.value);
     
     localStorage.setItem("list"/*設定處存器名稱*/,JSON.stringify/*以字串形式存起來
     */(todolist));
     /*把事項存起來部會消失*/
  
     input.value="";
  render();
 /*如果說想要設定成空白自步行新增就在這邊新增*/}
  else if(input.value ==0)
  {
    list.innerHTML = "請輸入字元";
  }
}

 /*id="delete" onclick="del()"*/



function del(i)
{
  todolist.splice(i,1);
render();
}


function render()
{
localStorage.setItem("list",JSON.stringify(todolist));/*這邊也可以存起來*/
var con="";
for(var i=0;i<todolist.length;i++)
  {   
    con =con+"<div>"+todolist[i]+"</div>"+"<button class='dee' onclick='del("+i+")'>刪除事項</button>";
    /*不適所有函數都在上面才能宣告，而是這邊就可以宣告了!!!*/
  }
list.innerHTML = con;
 
}