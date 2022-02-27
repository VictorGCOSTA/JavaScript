var nun = document.getElementById('nun')
var caixa = document.getElementById('caixa')
function gerar(){
    if (nun.value.length == 0){
        window.alert('INSIRA UM VALOR')
    }else{
        var n = Number(nun.value)
    for(var c= 1; c <= 10; c+= 1 ){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        caixa.appendChild(item)
    }
        /*let c = 1
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            caixa.appendChild(item)
            c++*/
    }
    }
    
    

    