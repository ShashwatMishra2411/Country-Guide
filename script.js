
enter.addEventListener("click", async ()=>{
    var country = cin.value
    let p = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    let c = await p.json()
    console.log(c[0])
    let cur = Object.keys(c[0].currencies)[0]
    sarea.style.height = "100%"
    cdet.style.height = "100%"
    cdet.innerHTML = `
    <span id="flag"><img src="${c[0].flags.svg}" alt=""></span>
    <span id="name">${c[0].name.common}</span>
    <ul>
    <li>Official Name: ${c[0].name.official}</li>
    <li>Capital: ${c[0].capital[0]}, (latitude = ${c[0].capitalInfo.latlng[0]}, longitude = ${c[0].capitalInfo.latlng[1]})</li>
    <li>Continent: ${c[0].continents[0]}</li>
    <li>Population: ${c[0].population}</li>
    <li>Area: ${c[0].area}</li>
    <li>Currency: ${c[0].currencies[cur].name} - ${c[0].currencies[cur].symbol}</li>
    <li>Car Side: ${c[0].car.side}</li>
    <li>Start Of Week: ${c[0].startOfWeek}</li>
    <li>Independent: ${c[0].independent}</li>
    <li>UN Member: ${c[0].unMember}</li>
    <li>Country Code Top-Level Domain: ${c[0].tld[0]}</li>
    </ul>
    <span id="coa"><img src="${c[0].coatOfArms.svg}" alt=""></span>` 
})
