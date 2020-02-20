var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
       alist[i].style.color = color;
       i = i + 1;
    }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },
  setBackGroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
   }
}
function nightDayhandler(own){
  var target = document.querySelector('body');
if(own.value === 'night'){
  Body.setBackGroundColor('black');
  Body.setColor('white');
 own.value = 'day';

 Links.setColor('powderblue');
}else{
 Body.setBackGroundColor('white');
 Body.setColor('black');
  own.value = 'night';

  Links.setColor('royalblue');
  }
}
