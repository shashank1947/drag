
function  drag1(ev)
{
    ev.dataTransfer.setData("text",ev.target.id);
}

function allowdrop1(ev)
{
    ev.preventDefault();

}

function drop1(ev)
{
  ev.preventDefault();
  var data1=ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data1));
}


