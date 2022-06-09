// This process will give us a the water trap array to use it in the chart.
// Output : [0, 0, 1, 0, 1, 2, 1, 0, 0, 1, undefined, undefined] counts 6 water trap.
// First Method
var water = function(t){
    let output = [0];
    let max = 0;
    let i=0;
   
    do{
      if(t[i]>=t[max] && t[i] !== 0){
          for(let k= max;k<i;k++){
              output[k]=t[max];
          }
          let j=i+1;
          while(j<t.length && t[i]>t[j]){
              j++
          }
         if(t[j]>=t[i]){
             for(k=i;k<j;k++)
             {output[k]=t[i];}
          i= j;
          max= j;
         }
      }
          i++;
      }while(i<t.length)
     
  for(k=0;k<output.length;k++){
      if(t[k]>=output[k])
          output[k]=0;
      else
              output[k]=Math.abs(output[k]-t[k]);
          }
    return output
  }
console.log(water([0,1,0,2,1,0,1,3,2,1,2,1]));

//Second Method
var water = function(t){
    let output = [0];
    let max = 0;
    let i=0;
   
    do{
        console.log("etape",i)
      if(t[i]>=t[max] && t[i] !== 0){
          for(let k= max;k<i;k++){
              output[k]=t[max];
          }
          let j=i+1;
          while(j<t.length && t[i]>t[j]){
              j++
          }
         if(t[j]>=t[i]){
             for(k=i;k<j;k++)
             {output[k]=t[i];}
          i= j;
          max= j;
         }
      }
          i++;
      }while(i<t.length)
  for(k=0;k<output.length;k++){
      if(t[k]<=output[k])
              output[k]=output[k]-t[k];
          }
    return output
}
console.log(water([0,1,0,2,1,0,1,3,2,1,2,1]));
  
var waterTrapped = function(t1,t2){
    let t = [];
    for(let i=0; i<t1.length; i++){
      if(t1[i] > t2[i]){
        t[i] = 0
      }
      else{
        t[i] = t2[i]
      }
      
    }
    return t;
}
  
console.log(waterTrapped([0,1,0,2,1,0,1,3,2,1,2,1],water([0,1,0,2,1,0,1,3,2,1,2,1])))

