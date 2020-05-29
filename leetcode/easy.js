// The Hamming distance between two intergers is the number of positions at 
// which the corresponding bits are different. 
// Given two interger
// x and y
// calculate the Hamming distance 
// x=3,y=1
 
function HammingDistance(x,y)
       {
           var arr1=[],arr2=[],count=0;
            //   var i=0;
               while(x!=0)
                  {
                       arr1.push(x%2);
                       x=Math.floor(x/2);
                  }
                  while(y!=0)
                  {
                      arr2.push(y%2);
                      y=Math.floor(y/2);
                    //   console.log(arr2)
                  }
                  var len=arr1.length-arr2.length;
                  if(arr1.length>arr2.length)
                
                  {
                        // console.log(arr1.length,arr2.length)
                       for(var i=0;i<len;i++)
                             {
                                  arr2.push(0)
                                //   console.log(arr2)
                             }
                  }
                else{
                    len=arr2.length-arr1.length;
                    for(var i=0;i<len;i++)
                    {
                         arr1.push(0)
                    }
                }
                arr1=arr1.reverse()
                arr2=arr2.reverse()
                console.log(arr2,arr2.length);
                console.log(arr1,arr1.length)
      for(var i=0;i<arr1.length;i++)
          {
               if(arr1[i]!=arr2[i])
                      count+=1;
          }
                  
                  
   return(count);
       }
console.log(HammingDistance(777,12));