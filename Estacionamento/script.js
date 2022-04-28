(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}min e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veículo, salva) {
            var _a;
            const patio = $("#patio");
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${veículo.nome}</td>
            <td>${veículo.placa}</td>
            <td>${veículo.entrada}</td>
            <td><button class="delete" data-placa="${veículo.placa}">X</button></td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            patio === null || patio === void 0 ? void 0 : patio.appendChild(row);
            if (salva) {
                salvar([...ler(), veículo]);
            }
        }
        function remover(placa) {
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo} deseja encerrar?`)) {
                return;
            }
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function salvar(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach(veiculo => {
                    adicionar(veiculo);
                });
            }
        }
        return ({ ler, adicionar, remover, salvar, render });
    }
    patio().render();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("PREENCHA TODOS OS CAMPOS");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();
