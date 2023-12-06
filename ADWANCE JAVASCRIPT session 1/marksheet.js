var std_name=prompt("enter your name");
var std_id=parseInt(prompt("enter your id:"));
var std_batchcode=prompt("enter your code:");
var eng=parseInt(prompt("enter your english marks:"));
var urd=parseInt(prompt("enter your urdu marks:"));
var sci=parseInt(prompt("enter your science mark:"));
var chem=parseInt(prompt("enter your chemestry mark:"));
var mat=parseInt(prompt("enter your math marks:"));


var obt = eng+urd+sci+chem+mat;
var per = obt*100/500;


document.write("NAME:"+std_name);
document.write("<br>");

document.write("STD ID:"+std_id);
document.write("<br>");

document.write("BATCH CODE:"+std_batchcode);
document.write("<br>");

document.write("YOUR ENGLISH MARKS:"+eng);
document.write("<br>");

document.write("YOUR URDU MARKS:"+urd);
document.write("<br>");
document.write("YOUR SCIENCE MARKS:"+sci);
document.write("<br>");

document.write("YOUR CHEMESTRY MARKS:"+chem);
document.write("<br>");

document.write("YOUR MATH MARKS:"+mat);
document.write("<br>");

document.write("Obtained Marks:"+obt)
document.write("<br>");

document.write("percentage:"+per)
document.write("<br>");


if (per>=90) {
   document.write("A+") ;
}

else if(per>=80){
    document.write("A");
}
else if(per>=70){
    document.write("B");
}

else if(per>=60){
    document.write("C");
}
else("You are failed in this exame")


