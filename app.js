// Chapter21-25
// Task1
// name1 = prompt("Enter first name")
// name2 = prompt("Enter last name")
// Fullname = (name1 +  name2)
// alert( "Name is:     " + Fullname)


//task2
// phone = prompt("Enter your favourite phone model")
// text = phone.length;
// alert("My favoruite phone is:  " + phone  +"\n"+ "Length of String:   " + text )

//task3
// var name = "pakistani"
//  alert("indux of 'n': " + name.induxOf("n"))

//task4
// name = "Hello World"
// alert("Last indux of 'l': " + name.index(9))


//task5
// name = "pakistani"
// alert("Character at indux 3: " + name[3])


//task6
// name1 = prompt("Enter first name")
// name2 = prompt("Enter last name")
// Fullname = (name1 +  name2)
// alert("My name is: " + Fullname)


//task7
// city = "hyderabad"
// name = "islam"
// alert("After replacement:  " + name + city.slice(5, 9))


//task9
// a = "234"
// num = Number(a);
// b = 345
// m = String(b);
// alert("value: " + num +  "\n" +  "type:   "    +   typeof(num)   +  "\n" +
//  "value: "+ num +  "\n" +  "type:   "    +   typeof(m))
 

//task10
// name = "peanuts"
// name = name.toUpperCase();
// alert(name)

// task11
// name = "javascript"
// name = name.titlecase();
// alert(name)

//task12
// var value = 35.75;
// v = Math.round(value)
// alert(v)

//task13
// a = prompt("Enter your name")
// if (a === " @ . , ! ") {
//      alert("Enter a valid user name")   
// }   
// else{
//      alert("valid name")
// }
 

//task17
// name = "Pakistan"
// alert("Last character of input: " + name[7])


//task18
// string =  "The quick brown fox jumps over the lazy dog" 
// count = string.count("the")
// alert("count of string is" + count)



// Chapter26-30
//task1
// a = prompt("Enter positive integer")
// round = Math.round(a)
// floor = Math.floor(a)
// ceil = Math.ceil(a)
// alert("Number is: "+a+ "\n" + "round of;  "+round+"\n" + "floor is:  "+floor+ "\n"+ "ceil of:   "+ceil)

//task2
// a = prompt("Enter negetive integer")
// round = Math.round(a)
// floor = Math.floor(a)
// ceil = Math.ceil(a)
// alert("Number is: "+a+ "\n" + "round of;  "+round+"\n" + "floor is:  "+floor+ "\n"+ "ceil of:   "+ceil)

//task3
// a = -4;
// value = Math.abs(a)
// alert("Absolute value of -4 is:   "  + value)

//task4
// a = prompt("Enter value")
// num = Math.random(a)
// alert("Random is:  " + num)


//task5
// d = prompt("Enter value")
// num = Math.coin


//task6
// for( i = 0;  i<=100;  i++){
//     alert(Math.random(i))
// }


//task7
// a = prompt("Enter Weight")
// alert("Your weight is:  " + a)
  
 
//task8
// i = prompt("Enter value")
// for(i = 0; i<=10;){
//     alert(i)
// }


//Chapter31-34
// task1
// d = new Date();
// b = d.getTime();
// c = d.getDate();
// alert("Time is:  "+b +"\n"+"Current date:  "+ c)

//task2
// d = new Date();
// b = d.getMonth();
// alert("Current month: " + b)

//task3
// d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// d = new Date();
// b = d.getDay();
// alert("Current day: " + d)


//task4
// if(day.CurrentDay("saturday || sunday")){
//     alert("it's fun day")
// }
// else{
//     alert("not fun day")
// }


//task5
// a = prompt("Enter date")
// if(a<16){
//     alert("First fifteen day of the month")
// }
// else{
//     alert("Last day of the month")
// }

//task6
// a = prompt("Enter date")
// day = a.getDate();
// mili = a.getmiliSecond();
// min = a.getMinutes();
// alert(a + "day" +day +"mili" + mili + "min" + min)


//task7
// a = prompt("")
// if(a< 12){
//     alert("it's AM")
// }
// else{
//     alert("it's PM")
// }

//task9
// ramzan = "12-3-2020";
// today = "6-4-2020";
// total = (ramzan-today)
// alert(total)


//Chapter35-38
//task1
// function tellTime() {
//      var now = new Date() ;
//      var theHr = now. getHours() ;
//      var theMin = now. getMinutes() ;
//      var theDate = now.getDate();
//      alert("Current time:   "+ theHr + ": " + theMin + "\n" + "Current Date is:   " +  theDate) ;
// }
// tellTime();


//task2
// function name(){
//     var fname = prompt("Enter First name ");
//     var lname = prompt("Enter last name");
//     alert("Full Name: " + fname +" " +lname)
// }
// name();

//task3
// function add(){
//     var a = prompt("");
//     var b = prompt("");
//     alert( "Sum is: " +  (a+b))
// }
// add();


//task4
// function calc(num){
//     var a = prompt("Enter first num");
//     var b = prompt("Enter operation");
//     var c = prompt("Enter Second num")
//     var d = a+b+c;
//     alert(d)
// }
// calc();

//task5
// function value(){
//     a = prompt("Enter a num");
//     b = a.squr();
//     alert(b)
// }
// value();


//task10 
// palindrome = prompt("Enter a word")
// function palindrome(str){
//     return;true
// }
// palindrome();

//task11
// function word(){
//    a = word.title();
// }
// word();


//task12
// function myfun(){
//     var str = prompt("Enter a value")
//     console.log(str.length);
// }
// myfun();


//task13
// function fun(){
//     var str = prompt("Enter a value")
//     a = str
//      alert(str.length;)
// }
//  fun();



//task14
// function calcr(){
//     r = prompt("Enter a radius")
//     c = 2*3.14*r;
//     a = 3.14*r**r
//     alert("Circumference is:  " + c +   "\n" +"Area of Circle is:    "  + a)
// }
// calcr();
