const country_URL="https://literate-barnacle-x5x76prvprrv3pw66-6600.app.github.dev/country";

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countryTable tbody");

    data.forEach(country=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${country.country_id}</tr>    
        <td>${country.country_name}</tr>    
        <td>${country.region_id}</td>    
    `;

    tbody.appendChild(row);

    });

}).catch(err=>{
    console.log(err.message);
})