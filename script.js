//This block creates the nav bar.
let top_div = document.createElement("div");
top_div.className = "top-div";
top_div.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">ISRO Informations 🚀</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" id="spacecrafts" onclick="spacecrafts(this)">Spacecrafts</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="centers(this)">Centres</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="customer_satellites(this)">CustomerSatellites</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="launchers(this)">Launchers</a>
    </li>
  </ul>
</div>
</nav>`;


//This creates the body div where the content are appended.
let body_div = document.createElement("div")
body_div.id= "body_div"
document.body.append(top_div,body_div);
var space_element = document.getElementById("spacecrafts")
spacecrafts(space_element);


//This Function retrive data for spacecrafts and display in the body.
async function spacecrafts(clickedelement){
    let links = document.querySelectorAll('.nav-link');
    for(let i=0;i<links.length;i++){
        links[i].classList.remove('active');
    }
    clickedelement.classList.add('active');
    //api retrive
    try {
      let spacecrafts_url =await fetch("https://isro.vercel.app/api/spacecrafts")
      let response = await spacecrafts_url.json()
      let body_div = document.getElementById("body_div")
      body_div.innerHTML="";
      for(var i = 0;i<response.spacecrafts.length;i++){
          let spacecraft_div = document.createElement("div")
          spacecraft_div.innerHTML = `<div class="card bg-light mb-3" id="spacecrafts_card" style="max-width: 100%;">
          <div class="card-body">
            <p class="card-text">${i+1}.${response.spacecrafts[i].name}.</p>
          </div>
        </div>`
        body_div.append(spacecraft_div)
      }
      
    } catch (error) {
      alert(error)
    }

}


//This Function retrive data for launchers and display in the body.
async function launchers(clickedelement){
    let links = document.querySelectorAll('.nav-link');
    for(let i=0;i<links.length;i++){
        links[i].classList.remove('active');
    }
    clickedelement.classList.add('active');
    //api retrive
    try {
      let launchers_url = await fetch("https://isro.vercel.app/api/launchers")
      let response = await launchers_url.json();
      let body_div = document.getElementById("body_div")
      body_div.innerHTML="";
      for(var i=0;i<response.launchers.length;i++){
          let launcher_div = document.createElement("div")
          launcher_div.innerHTML = `<div class="card bg-light mb-3" id="launchers_card" style="max-width: 100%;">
          <div class="card-body">
            <p class="card-text">${i+1}.${response.launchers[i].id}.</p>
          </div>
        </div>` 
        body_div.append(launcher_div)
      }
    } catch (error) {
      alert(error)
    }

}


//This Function retrive data for Customer_Satellite and display in the body.
async function customer_satellites(clickedelement){
    let links = document.querySelectorAll('.nav-link');
    for(let i=0;i<links.length;i++){
        links[i].classList.remove('active');
    }
    clickedelement.classList.add('active');
    //api retrive
    try {
      let customer_satellites_url = await fetch("https://isro.vercel.app/api/customer_satellites")
      let response = await customer_satellites_url.json();
      let body_div = document.getElementById("body_div")
      body_div.innerHTML="";
      for(var i= 0;i<response.customer_satellites.length;i++){
          let customer_satellites_div =document.createElement("div");
          customer_satellites_div.innerHTML=`<div class="card bg-light mb-3" id="customer_satellite_card" style="max-width: 100%;">
          <div class="card-header">${i+1}.${response.customer_satellites[i].country}</div>
          <div class="card-body">
            <p>Launcher: ${response.customer_satellites[i].launcher}.</p>
            <p>Launch Date: ${response.customer_satellites[i].launch_date}.</p>
            <p>Id: ${response.customer_satellites[i].id}.</p>
          </div>
        </div>`
        body_div.append(customer_satellites_div)
      }
    } catch (error) {
      alert(error)
    }

}


//This Function retrive data for launchers and display in the body.
async function centers(clickedelement){
    let links = document.querySelectorAll('.nav-link');
    for(let i=0;i<links.length;i++){
        links[i].classList.remove('active');
    }
    clickedelement.classList.add('active');
    //api retrive
    try {
      let centers_url = await fetch("https://isro.vercel.app/api/centres")
      let response = await centers_url.json();
      let body_div = document.getElementById("body_div")
      body_div.innerHTML="";
      for(var i= 0;i<response.centres.length;i++){
          let customer_satellites_div =document.createElement("div");
          customer_satellites_div.innerHTML=`<div class="card bg-light mb-3" id ="centers" style="max-width: 100%;">
          <div class="card-header">${i+1}.${response.centres[i].Place}</div>
          <div class="card-body">
            <p>Name: ${response.centres[i].name}.</p>
            <p>State: ${response.centres[i].State}.</p>
          </div>
        </div>`
        body_div.append(customer_satellites_div)
      }
    } catch (error) {
      alert(error)
    }

}
