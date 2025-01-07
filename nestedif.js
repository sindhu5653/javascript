a=prompt('Enter the first number')
b=prompt('Enter the second number')
c=prompt('Enter the third number')
if(a>b)
    {
        if(a>c){
            console.log('The largest number is a')
        }
        else{
            console.log('The largest number is c')
        }
    }
else {
    if(b>c)
        {
        console.log('The largest number is b')
        }
    else
        {
        console.log('The largest number is c')
        }
    }