function findingPrime(num)
{
       if(num==0 || num==1)
         return false;
       else if(num==2)
        return true;
        else
          {
                 //here the itteration of n is till (n)^(1/2) 
                 //This is because of co-factor 
                 //consider b=num/a =>  a*b=num and a and b are called co-factor of number;
                 //if a==b => a==sqrt(n)
                 //if a>b => a>sqrt(n) and b<sqrt(n)
                 //if a>b => a>sqrt(n) and b<sqrt(n)

                 //if that number is being divided by the number which is less than sqrt(n)
                 // than the number is not a prime number. 
                 for(var i=2;i<=Math.floor(Math.sqrt(num));i++)
                     {   
                     //       console.log(i)
                           if(num%i==0)
                            return false;
                     }
              return true;
          }
}
value=findingPrime(96);
console.log(value);