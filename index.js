function gerarDespesas() {

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')


    let dispesas = new Dispesas(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    dispesas.validarDados()

    dB(dispesas)

}








class Dispesas {

    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }




    validarDados(d) {

        for (let i in this) {

            if (this[i] == '' || this[i] == undefined || this[i] == null) {
                alert('precisar npreecher tudo ')


            }
        }

    }
}







function dB(d) {


    localStorage.setItem('teste', d)

}