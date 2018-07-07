// function getEmployeesData()
// {
//     let req = new XMLHttpRequest();
//     req.open('GET',"data/employee.json",true);
//     req.onreadystatechange = function () {
//
//
//         if(req.readyState === 4 && req.status === 200)
//         {
//             let data = JSON.parse(req.responseText);
//             let employees = data['employees'];
//
//             let text = "<table border='3' >";
//             for (let i = 0; i < employees.length; i++)
//             {
//                 let employee = employees[i];
//                 text += "<tr><td>" + employee['id'] + "</td><td>" + employee['name'] + "</td></tr>";
//             }
//             text += "</table>";
//             document.getElementById('data').innerHTML = text;
//         }
//     }
//     req.send();
// }

function getEmployeeDataFromXML()
{
    let req = new XMLHttpRequest();
    req.open('GET', 'data/employee.xml', true);
    req.onload = function ()
    {
        if (req.readyState == 4 && (req.status >= 200 && req.status < 400))
        {
            let xmlDoc = req.responseXML;
            let employee = xmlDoc.getElementsByTagName('employee'); // array of employee objects
            //console.log(employee);
            for (let j = 0; j < employee.length; j++)
            {
                let oneEmployee = employee[j];
                //console.log(oneEmployee);
                for(let i = 0; i < oneEmployee.childNodes.length; i++)
                {
                    if (oneEmployee.childNodes[i].nodeType === 1)
                    {
                        console.log(oneEmployee.childNodes[i].nodeName + " - " + oneEmployee.childNodes[i].childNodes[0].nodeValue);
                    }
                }
            }

        }
    }
    req.send();
}