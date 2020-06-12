var myModule = require('./myModule.js');
var math = require('./math.js');
var myFileModule = require('./fileModule.js');
var stringModule = require('./stringModule');
myModule.myPrint('jjj');
myModule.myPrint('hi anh em');
myModule.myPrint2('hi anh em 2');

myFileModule.taoFile('hello.txt','dme quoc anh !');
myFileModule.docFile('hello.txt');
//myFileModule.appendFile('hello.txt', 'aaaaadddddd hungry hungry !!');

console.log(stringModule.subString('a nice day', 'nice'));
console.log(stringModule.subString('a nice day', 'bad'));

math.sum(12,5);
math.sum2(3);
math.sum3(6,9);
for(i = 1; i < 5 ; i++)
{
    sayHi("Hello cac con gioi number " + 2*i);

}
function sayHi(msg)
{
    console.log(msg);
}
