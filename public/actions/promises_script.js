alert("hola promesas");
var cumplePromesa=true;
const myFirstPromise= new Promise((resolve,reject)=>{
    if(cumplePromesa){
        resolve("la promesa1 fue cumplida")
    }else{
        reject("la promesa fue rota")
    }
});
console.log(myFirstPromise);

function myFunctionSincrono(){
    var cumplePromesa=true;
    return new Promise((resolve,reject)=>{
    if(cumplePromesa){
        resolve({
            status:200,
            data:{
                name:"alejandro",
                lastname:"binilla"
            }
        });
    }else({
        status:5000,
        error:"ha ocurrido un error",
    })
});
}
console.log(myFunctionSincrono());

function myFunctionAsincrono(){
    var cumplePromesa=true;
    return new Promise((resolve,reject)=>{
        //despues de cierto tiempo,ejecuta, 5000: 5s
        setTimeout(()=>{
            if(cumplePromesa){
                resolve(
                    {
                    status:200,
                    data:{
                        name:"alejandro",
                        lastname:"binilla"
                    }
                });
            }else(
                {
                status:5000,
                error:"ha ocurrido un error",
            })
        },5000);
    
});
}
//lo dejara como una promesa,pendiente
//console.log(myFunctionAsincrono());
//ejecutando la promesa
//primera forma de hacerlo
var asincrono = myFunctionAsincrono();
asincrono.then((value)=>{
    console.log(value);
})
asincrono.catch((error)=>{
    console.log(error);
})

//espero que me llega y hago la accion que me venga
//osea espera que se resuelva no quedara como promesa
//en este caso el error se capturara de otra forma
//segunda forma de hacerlo
async function llamarAsincronaFuncionDentro(){
    try{
        var asincrono = await myFunctionAsincrono();
        if(asincrono.status===200){
            alert(`los datos obtenidos son ${asincrono.data.name} el apellido es ${asincrono.data.lastname}`)
        }
    }catch(error){
        console.log(error);

    }
  
}
//llamarAsincronaFuncionDentro();

async function llamarAsincronaFuncionDentro2(){
    var asincrono = myFunctionAsincrono();
    console.log(asincrono);
    asincrono.then((value)=>{
        alert(`los datos obtenidos son ${value.data.name} el apellido es ${value.data.lastname}`)
    })
    asincrono.catch((error)=>{
        console.log(error);
    })
    
  
}
llamarAsincronaFuncionDentro2();