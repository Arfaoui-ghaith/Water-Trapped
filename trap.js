//This function count how much water trap we have.
var trap = function(t){
    let count = 0;
    let max = 0;
    let ult = 0;
    for(let i=0; i<t.length;i++){
        if(t[i]>=t[ult]){ult = i;}
    }
  
    if(t[1]>t[0]){max=1;}
    for(i=2; i<t.length;i++){
        console.log("etape",i)
      if(t[i]>=t[max]){
          count= count + t[max]*(i-max-1)
          for(let j=max+1; j<i ; j++){
              count= count - t[j]
          }
            max= i
  
  
      }
      else if(t[i]<t[i+1] && t[i]<t[i-1] && i>ult){
        count = count + Math.min(t[i+1],t[i-1])-t[i];}
        console.log("max",max)
          console.log("count",count)
      }
  
    return count
}