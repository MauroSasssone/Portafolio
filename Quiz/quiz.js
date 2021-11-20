function verificarRespuestas(){
    let total = 5
    let puntos = 0
    let myForm= document.forms["quizForm"]
    let respuestas = ["1 a", "2 b", "3 c", "3 c", "3 c"]
    let resultados = ["a Python","b elemento","Una librería Javascript con soporte multinavegador","c. Son dos lenguajes de programacion diferentes","c. JavaScript diferencia entre mayúsculas y minúsculas"]
    
    for (let i = 1; i <= total;  i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === "" ){
           
           alert('debes contestar lapregunta ' + i)
            
           
         
        
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                    ++puntos
                   
                   
            }
        } 
    }

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = '<h2> Obtuviste <span>' + puntos + ' </span> de <span>  '+ total+ ' puntos </span></h2>'
    
    let todo = document.getElementById("Responde")
    todo.innerHTML ="<h4> las respuestas correctas son <h4>" +resultados
    return false;
    
    
}