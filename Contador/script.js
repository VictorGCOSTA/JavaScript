var inc =document.getElementById("início")
var fim = document.getElementById("fim")
var passo =document.getElementById("passo")
var res = document.getElementById("Contando")
function contar() {
    res.innerHTML  ="contando:"
    let i = Number(inc.value)
    let f = Number(fim.value)
    let p = Number (passo.value)
    if(inc.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO faltam dados!')
    } else if (p==0) {
       alert('Considerando passo 1') 
       p = 1
    }
    if (i<f){
        for(var c = i; c <= f ; c += p){
            res.innerHTML += (` ${c} `)
        } 
        
        }else if (i>f){
            for(var c = i; c >=f ; c -= p){
                res.innerHTML += ` ${c} `
            }

    }
}