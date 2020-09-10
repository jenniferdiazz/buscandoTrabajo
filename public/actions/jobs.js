function inicio(){
    var button = document.getElementById("button-add-new");
  
  
    var e = document.getElementById("especialidad");
    var opc_esp=e.options[e.selectedIndex].value;

    var h = document.getElementById("pais");
    var opc_pais=h.options[h.selectedIndex].value;
    
    button.onclick = ()=>{
      

        
        $(function(){
            //const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
            //console.log(opc_esp);
            //console.log(opc_pais);
            getJobs(opc_esp,opc_pais);
            //getJobs("python","usa");
        });
    }
  }

/*const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
$(function(){
    getJobs("python","usa");
});*/
function getJobs(type,location){
    const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
    axios.get(`${BASE_URL}description=${type}&location=${location}`)
    .then((resp)=>{
        resp.data.forEach((job)=>{
            printJob(job)
        })
        console.log(resp);
    })
    .catch((error)=>{
        console.log(error);
    })
}
function printJob(job){
    var content = `
    <article class="container_grid">
        <div class="location_label"> 
        <h3>Localidad</h3>
        </div>
        <div class="company_label">
          <h3>Compañia</h3>
        </div>
        <div class="type_label">
          <h3>Tipo</h3>
        </div>
        <div class="location">${job.location}</div>
        <div class="company">${job.company}</div>
        <div class="type">${job.type}</div>
        <div class="descripcion_label">
            <h3>Descripcion</h3>
        </div>
        <div class="descripcion">
        ${job.description}
        </div>
      </article>`
      $('#jobs_container').append(content);
}