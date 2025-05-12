const employee_URL="https://literate-barnacle-x5x76prvprrv3pw66-6600.app.github.dev/emp";

fetch(employee_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Employee Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#employeeTable tbody");

    data.forEach(employee=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${employee.employee_id}</td>    
        <td>${employee.first_name}</td>    
        <td>${employee.last_name}</td>
         <td>${employee.email}</td>    
        <td>${employee.phone_number}</td>    
        <td>${employee.hire_date}</td> 
        <td>${employee.job_id}</td>    
        <td>${employee.salary}</td>    
        <td>${employee.commission_pct}</td>
         <td>${employee.manager_id}</td>    
        <td>${employee.department_id}</td>    
          
    `;

    tbody.appendChild(row);

    });

}).catch(err=>{
    console.log(err.message);
})