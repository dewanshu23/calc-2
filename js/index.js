// let input_box2 = document.querySelector('.input_box2');
// let input_box1 = document.querySelector('.input_box1');
// let equation;

// let get_val = (num)=>{
//     (input_box2.value==0)?input_box2.value=num:input_box2.value+=num;
// }
// //Operator checking
// let get_opretor = (num)=>{
//     get_ans(num);
//     if(input_box2.value!='0'){
//         if(input_box2.value.charAt(input_box2.value.length - 1)=='+'
//         ||input_box2.value.charAt(input_box2.value.length - 1)=='-'
//         ||input_box2.value.charAt(input_box2.value.length - 1)=='*'
//         ||input_box2.value.charAt(input_box2.value.length - 1)=='/')
//         {
//          input_box2.value = input_box2.value.slice(0,-1) + num;
//         }
//         else{
//          input_box2.value+=num;
//         }
//     }

// }

// //Calculating answer
// let get_ans = (val)=>{

//     let ans = eval(input_box2.value);
//     equation = input_box2.value;
//     input_box2.value=ans;
//     input_box1.value=equation + val;
// }


// //clear button 
// let Aclear = () =>{
//     input_box2.value=0;
//     input_box1.value='';
// }

// //Back Space
// let backSpace= ()=>{
//     if(input_box2.value.length>1)
//     {
//         input_box2.value=input_box2.value.slice(0,-1);
//     }
//     else{
//         input_box2.value=input_box2.value.slice(0,-1);
//         input_box2.value = '0';
//     }
// } 
let operators = ['+','-','*','/']

let input_box2 = document.querySelector('.input_box2');
let input_box1 = document.querySelector('.input_box1');
let equation;
let opt;
let percentage

function checkOperator(op){
    if (input_box2.value.charAt(input_box2.value.length - 1) == op){
        return input_box2.value.slice(0,-1);
    }
}
let get_val = (num)=>{
    (input_box2.value==0)?input_box2.value=num:input_box2.value+=num;
    return input_box2.value;
}
//Operator checking
let get_opretor = (num)=>{

    //    input_box2.value = eval(input_box2.value)
        if(input_box2.value!='0')
        {
            (input_box2.value.charAt(input_box2.value.length - 1)=='+'
            ||input_box2.value.charAt(input_box2.value.length - 1)=='-'
            ||input_box2.value.charAt(input_box2.value.length - 1)=='*'
            ||input_box2.value.charAt(input_box2.value.length - 1)=='/')
            ?input_box2.value = input_box2.value.slice(0,-1) + num:input_box2.value+=num;
            // t=(operators.find(checkOperator));
             
            // t?input_box2.value = input_box2.value.slice(0,-1) + num:input_box2.value+=num;
                   
        }
        else
        {
            (input_box2.value.charAt(input_box2.value.length - 1)=='-')?input_box2.value = input_box2.value.slice(0,-1) + num:input_box2.value+=num;
        
        }
        opt = num;
    }



//Calculating answer
let get_ans = (val)=>{

    let ans = eval(input_box2.value);
    equation = input_box2.value;
    input_box2.value=ans;
    input_box1.value=equation + '=';
}


//clear button 
let Aclear = () =>{
    input_box2.value=0;
    input_box1.value='';
}

//Back Space
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