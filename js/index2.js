let input_box2 = document.querySelector('.input_box2');
let input_box1 = document.querySelector('.input_box1');
let flag = true;
let eq=[],answer=[];

let get_val = (num)=>{
    (input_box2.value==0)?input_box2.value=num:input_box2.value+=num
}

let get_ans = ()=>{

    let ans = eval(input_box2.value);
    equation = input_box2.value;
    eq.push(equation+'=');
    answer.push(ans)
    input_box2.value=ans;
    input_box1.value=equation +'=';
}

let Aclear = () =>{
    input_box2.value=0;
    input_box1.value='';

}

function backSpace(){
        equation = input_box2.value
        input_box2.value=equation.slice(0,-1);
}

function get_opretor(num)
{
    (input_box2.value==0)?input_box2.value=num:input_box2.value+=num
}


function history(){
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

        console.log(eq,answer)
        for(let i=0;i<eq.length;i++)
        {

            document.querySelector('.history').innerHTML += '<h2>'+eq[i]+'</h2><h1>'+answer[i]+'</h1>'
        }

}