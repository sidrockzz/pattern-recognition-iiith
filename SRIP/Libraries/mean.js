var plot = [{
    "outcome" : 1,
    "x" : 0.2,
    "y" : -0.6,
    
},
{
    "outcome" : 2,
    "x" : 0.5,
    "y" : 0.3,
},
{
    "outcome" : 3,
    "x" : 0.4,
    "y" : 0.5,
}];

total=0;


var eqx = 0;
var eqy = 0;

for( var i=0;i< plot.length;i++)
 {
  var temp=0;
  var temp2=0;
  plot.total += parseInt(plot[i].x * plot[i].outcome,10);
  temp2 += parseInt(plot[i].y * plot[i].outcome,10);
 }

eqx = plot.total;
eqy = temp2;


document.write(eqx);
document.write(br);
document.write(eqy);


