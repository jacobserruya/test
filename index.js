let alunos = ["Jacob","David","Adi","Michal"]
let grades1 = [2.0,8.7,5.5,6.0];
let grades2 = [6.0,3.7,4.5,6.7];
let grades3 = [5.0,7.7,5.5,4.7];

function ulha(){

    document.body.innerHTML +="<h1>ULHHHAAAA2</h1>"
}

media = (n1,n2,n3)=>{return (n1+n2+n3)/3}

aprovado = function(n1,n2,n3){
    if (media(n1,n2,n3) >= 6.0){
        return "aprovado";
    }   
    return "reprovado";

}


for(let i in alunos ){
    console.log(
     alunos[i] + "-" + grades1[i]   + " -" + grades2[i]   + "-" + grades3[i]  +
      "-media :"+Math.round(media(grades1[i],grades2[i],grades3[i])*10)/10   + "-"  + 
      aprovado(grades1[i],grades2[i],grades3[i])         


    );
}


window.onload = function() {

    let h1 =document.getElementsByTagName("h1");

    for (let h of h1){
    h.addEventListener("click",papi);
    }


}

function papi(e){

 console.log(e.target.parentElement)

} 

