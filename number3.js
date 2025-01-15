pattern=""
num=1
for (i=1;i<=3;i++){
    for(j=1;j<=3;j++){
        pattern=pattern+num
        num++
    }
    pattern=pattern+"\n"
}
console.log(pattern)