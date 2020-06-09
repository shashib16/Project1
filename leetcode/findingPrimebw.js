// without using "Sieve of Eratosthenes" it is used to find the prime numbers till given limit. 
//with O(nloglogn);
function isPrime(num)
{
     if(num==2) return true;
     else if(num ==0 || num==1) return false;
     else {
           for(var i=2;i<=Math.floor(Math.sqrt(num));i++)
                 {
                      if(num%i==0)
                       return false;
                 }

         return true;
         }
}
// function findingPrimebw(num)
//  {
//       var arr=[],arr1=[];
   
//     for(var i=0;i<=num;i++)
//       {   
//           if(isPrime(i))
//            arr1.push(i)
//     } 
// return arr1;
//  }

//  prime_arr=[]
// prime_arr=findingPrimebw(17);
// console.log(prime_arr);

// using "Sieve of Eratosthenes" we find the prime number in between
function delete_multiple_return_length(arr1,num1) {
          {
          for(var i=0;i<arr1.length;i++)
            {if(arr1[i]%num1==0)
                 arr1.splice(i,1);
             }
     return arr1.length;
     }
      }

function findingPrimebw(num)
{
     var arr=[],arr1=[];
      for(var i=2;i<=num;i++)
             arr.push(i);
          
      for(i=0;i<arr.length;)
             {
               //    console.log(arr.length)
               if(isPrime(arr[i]))
               {
                    arr1.push(arr[i]);  
                     arr.length=delete_multiple_return_length(arr,arr[i])
               // console.log(arr.length,arr)
          }  
          i=0;
                      
       }    
          return arr1; 
}      
prime_arr=[]
prime_arr=findingPrimebw(17);
console.log(prime_arr);