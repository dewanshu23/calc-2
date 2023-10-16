let input_box2 = document.querySelector('.input_box2');
let input_box1 = document.querySelector('.input_box1');
let opt,percentage;
let operators = ['+','-','*','/'];
let flag = true;
let eq = [], ans=[];




//for getting the numbers in input box onclick buttons
function get_val(num)
{
    (input_box2.value==0)?input_box2.value=num:input_box2.value+=num;
}
//for getting the operators in input box onclick buttons but that should not not be multiples
function get_opretor(num)
{
  
    if(input_box2.value!='0')
    {
        t=(operators.find(checkOperator));      
        if(t)
        {
            input_box2.value = input_box2.value.slice(0,-1) + num
        }
        else{
            
            input_box2.value = eval(input_box2.value);
            input_box2.value+=num;
        }
    }
    else
    {
        (input_box2.value.charAt(input_box2.value.length - 1)=='-')?input_box2.value = input_box2.value.slice(0,-1) + num:input_box2.value+=num;
    
    }
    opt = num;
}


function checkOperator(op){
    if (input_box2.value.charAt(input_box2.value.length - 1) == op){
        return input_box2.value.slice(0,-1);
    }
}


//Clear function 
function clr()
{
    input_box2.value=0;
    input_box1.value='';
}

// Backspace Button Logic

let backSpace= ()=>{
    if(input_box2.value.length>1)
    {
        input_box2.value=input_box2.value.slice(0,-1);
    }
    else{
        input_box2.value=input_box2.value.slice(0,-1);
        input_box2.value = '0';
    }
} 


//Calculating answer

function get_ans()
{

    let ans = eval(input_box2.value);
    equation = input_box2.value;
    hist(equation,ans);
    input_box2.value=ans;
    input_box1.value=equation + '=';

}

//calculating percent

let percent = ()=>{
    if(opt == '+'|| opt=='-')
    {
        equation = input_box2.value;
        let arr = equation.split(opt);
        percentage = (arr[0]*arr[1])/100; 
        console.log(percentage);
        input_box2.value = arr[0]+opt+percentage 
     }
}



// History Div 

function history(){
//for Hide Show Button 
    

        hist = document.querySelector('.history');
        button = document.querySelector('.button_div');
        flag?hist.style='visibility: visible':hist.style='visibility: visible'
        if(flag){
            hist.style='visibility: visible';
            button.style='visibility: hidden';
            
        }
        else{
            hist.style='visibility: hidden';
            button.style='visibility: visible';
        }
        flag=!flag;
    
    
        histDiv = document.querySelector('.history');
        // histDiv.innerHTML=`<div class="data"><h1 style='text-align:center'>History</h1><h3>${eq[0]}</h3><h2>${ans[0]}</h2></div>`
        for(let i=1;i<eq.length;i++)
        {
            histDiv.innerHTML+=`<div class="data"><h3>${eq[i]}</h3><h2>${ans[i]}</h2></div>`

        }
   

}

function hist(a,b)
{
    eq.push(a+'=');
    ans.push(b);
    console.log('found a hist...',eq,ans);
}

