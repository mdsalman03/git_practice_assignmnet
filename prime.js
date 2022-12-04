let count = 0;
for( let i=2; i<= num; i++) {
if (num%i!=0){
count+=1;
}
}
if (count == 2){
cinsole.log('Yes');
}
else {
console.log('No');
}