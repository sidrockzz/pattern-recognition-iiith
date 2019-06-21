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

var eqy = 0;

for( var i=0;i< plot.length;i++)
 {
  var temp=0;
  var temp2=0;
  total += plot[i].x * plot[i].outcome;
  temp2 += plot[i].y * plot[i].outcome;
 }

eqx = total/plot.length;
eqy = temp2/plot.length;

//Mean of the probability 
document.write(eqx);
document.write(eqy);

//Covariance of the random probability

var covariance =0;

for(var j=0;j<plot.length;j++)
{
 var temp =0;
 temp += [(eqx - plot[j].x) * (eqy - plot[j].y)];
}
 covariance = temp/(plot.length -1);

document.write(covariance);




