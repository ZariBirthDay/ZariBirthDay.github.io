var pos = 0;
var speed = 150;
var endChar = "❣️";
var msg  = document.title;

function moveTitle() {
  var ml = msg.length;
  title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
  document.title = title;
  pos++;
  if (pos > ml) pos=0;
  window.setTimeout("moveTitle()",speed);
} 

moveTitle();