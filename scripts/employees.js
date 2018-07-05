function getEmployeesData()
{
    let req = new XMLHttpRequest();
    req.open('GET',"data/employee.json",true);
    req.onreadystatechange = function () {


        if(req.readyState === 4 && req.status === 200)
        {
            let data = JSON.parse(req.responseText);
            var employees = data['employees'];

            var text = "<table border='3' >";
            for (let i = 0; i < employees.length; i++)
            {
                let employee = employees[i];
                text += "<tr><td>" + employee['id'] + "</td><td>" + employee['name'] + "</td></tr>";
            }
            text += "</table>";
            document.getElementById('data').innerHTML = text;
        }
    }
    req.send();
}