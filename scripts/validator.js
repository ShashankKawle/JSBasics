let psw,cpsw = "";

function takeInputs()
{
    psw = document.getElementById('password').value;
    cpsw = document.getElementById('cpassword').value;
}

function validate()
{
    let flag = false;
    var languages = document.getElementsByName('language');
    alert("Total Length : " + languages.length);

    /*for (let i = 0; i< languages.length; i++)
    {
        alert(languages[i].checked);
    }*/

    for (let i = 0; i< languages.length; i++)
    {
        if(languages[i].checked)
        {
            flag = true;
            break;
        }
    }
    if(flag === false)
    {
        alert("please select at least one language");
    }

    //-----------------------------------------

    if(psw !== cpsw)
    {
        alert("Password and Confirm password doesn't match");
        resetFields();
        return false;
    }
    return true;
}

function check()
{
    takeInputs();
    if(psw !== cpsw)
    {
        document.getElementById('error').innerHTML = "Password and Confirm password doesn't match";
        resetFields();
    }
    else
    {
        document.getElementById('error').innerHTML = '';
    }
}

function resetFields()
{
    document.getElementById('password').value = '';
    document.getElementById('cpassword').value = '';
    document.getElementById('password').focus();
}

function changeTheme(x)
{
    x.classList.toggle('hilight');
}