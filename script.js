const FLUJO = document.getElementById ('flu');
const BOTON = document.getElementById('calcular');
const INPUT = document.getElementById('peso');
const MAN = document.getElementById('man');
const MAN1 = document.getElementById('man1');
const ERROR = document.getElementById("error");

BOTON.addEventListener("click", calcular);
    
function calcular(){
    let peso = INPUT.value 
    if (peso == ""){
        console.log ("vacio");
    }

    let error = INPUT.value
    if (error <= 0){
        console.log("eror");
        ERROR.innerHTML = "Ingrese dato valido";
        ERROR.style.display = "block";
    }
    console.log (peso)
    if (peso<=30) {
        console.log(hollyday(peso));
        FLUJO.innerHTML = hollyday(peso)+"cc diario";
        MAN.innerHTML = "m+m/2"+ ((hollyday(peso))/24).toFixed(2)+ "cc/hr";
        MAN1.innerHTML = "mantenimiento"+ (((hollyday(peso))/24)*1.5).toFixed(2)+ "cc/hr";

        FLUJO.style.display = "block";
        MAN.innerHTML.display = "block";
        MAN1.innerHTML.display = "block";
    }

     else if(peso>=30) {
        console.log (superficieCorporal(peso), "SC");
       FLUJO.innerHTML = superficieCorporal(peso)[0] +" cc/hr CON 1500";
       MAN.innerHTML = superficieCorporal(peso)[1]+ "cc/hr CON 2000";

       FLUJO.style.display = "block"
       MAN.style. display = "block"
    }
}        
function hollyday (peso){
    let resultado = 0;
    if (peso<=10){
        resultado = (peso*100);
    }
    else if(peso <=20){
        resultado = 1000+((peso-10)*50);
    }
    else if (peso<=30){
        resultado = 1500 + ((peso-20)*20);
    }
    return resultado
}
function superficieCorporal (peso){
    
    let superficieCorporal = ((peso*4)+7)/(peso+90);
    console.log (superficieCorporal)
    return [(superficieCorporal*1500).toFixed(2), (superficieCorporal*2000).toFixed(2)] 
}