interface Veiculo {
    nome: string,
    placa: string,
    entrada: Date | string
}
(function( ){
    const $ = (query: string): HTMLInputElement | null =>  document.querySelector(query)

    function calcTempo(mil: number){
        const min = Math.floor(mil/ 60000)
        const sec = Math.floor((mil%60000)/1000)
        return `${min}min e ${sec}s`
    }
    
    function patio(){
        function ler(): Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : []
        }

        function adicionar(veículo: Veiculo, salva ?: boolean){
            const patio = $("#patio")
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${veículo.nome}</td>
            <td>${veículo.placa}</td>
            <td>${veículo.entrada}</td>
            <td><button class="delete btn btn-secondary" data-placa="${veículo.placa}">X</button></td>
            `
            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa)
            })
            patio?.appendChild(row)
            if(salva){
               salvar([...ler(), veículo]) 
            }
            
        }

        function remover(placa: string){
            const {entrada, nome} = ler().find(veiculo => veiculo.placa === placa)
            const tempo = calcTempo(new Date().getTime() - new Date (entrada).getTime())
            if(!confirm(`O veículo ${nome} permaneceu por ${tempo} deseja encerrar?`)){
                return
            }
            salvar(ler().filter((veiculo)=> veiculo.placa !== placa))
            render()
        }

        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculos))
        }

        function render(){
            $("#patio")!.innerHTML = ""
            const patio = ler()
            if(patio.length){
                patio.forEach(veiculo => {
                    adicionar(veiculo)
                });
            }
        }

        return ({ler, adicionar, remover, salvar, render})
    }
    patio().render()
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value
        const placa = $("#placa")?.value
        if (!nome || !placa){
            alert("PREENCHA TODOS OS CAMPOS")
            return
        }
        patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true)
    })
})()