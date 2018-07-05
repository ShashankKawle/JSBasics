let num1 = 0;
let num2 = 0;
let result = 0;

function takeInput()
{
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
}

function setResult()
{
    document.getElementById('display').innerHTML = result.toString();
}

// CORE FUNCTIONS

function Add()
{

    takeInput();
    result = num1 + num2;
    setResult();
}

function Substract()
{
    takeInput();
    result = num1 - num2;
    setResult();

}

function Multiply()
{
    takeInput();
    result = num1 * num2;
    setResult();

}

function Divide()
{
    takeInput();
    if(num2 === 0)
    {
        document.getElementById('display').innerHTML = "Infinite";
    }
    else
    {
        result = num1/num2;
        setResult();
    }
}