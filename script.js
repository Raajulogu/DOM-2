function labels(tagname,attrname,attrvalue,content){
    var lab=document.createElement(tagname);
    lab.setAttribute(attrname,attrvalue);
    lab.innerHTML=content
    return lab;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var inp=document.createElement(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2);
    inp.setAttribute(attrname,attrvalue);
    inp.setAttribute(attrname1,attrvalue1);
    inp.setAttribute(attrname2,attrvalue2);
    return inp;
}

var fname=labels("label","for","fname","First Name");
var br1=document.createElement("br");
var input1=inputs("input","type","text","name","firstname","id","fname");
var br2=document.createElement("br");
var mname=labels("label","for","mname","Middle Name");
var br3=document.createElement("br");
var input2=inputs("input","type","text","name","middlename","id","mname");
var br4=document.createElement("br");
var lname=labels("label","for","email","Last Name");
var br5=document.createElement("br");
var input3=inputs("input","type","text","name","lastname","id","lname");
var br6=document.createElement("br");
var email=labels("label","for","email","Email");
var br7=document.createElement("br");
var input4=inputs("input","type","email","name","email","id","email");
var br8=document.createElement("br");
var password=labels("label","for","password","Password");
var br9=document.createElement("br");
var input5=inputs("input","type","password","name","password","id","password");
document.body.append(fname,br1,input1,br2,mname,br3,input2,br4,lname,br5,input3,br6,email,br7,input4,br8,password,br9,input5);
