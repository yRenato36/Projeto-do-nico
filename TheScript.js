function prox() {
    var oi = window.document.getElementById('Oi')
    oi.innerHTML = 'Por favor. Preencha os dados em baixo de mim'
}

function dados() {
    var i = window.document.getElementById('ini')
    var f = window.document.getElementById('fim')
    var inter = window.document.getElementById('inter')
    var res = window.document.getElementById('res')
    if (i.value.length == 0 || f.value.length == 0 || inter.value.length == 0) {
        window.alert('Há campos em branco, por favor preencha')
    } else {
        res.innerHTML = 'Contando: '
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var intervalo = Number(inter.value)
        if (intervalo <= 0) {
            window.alert('Intervalo 0 não é possível, considerando intervalo 1')
            intervalo = 1
        }
        if (inicio < fim) {
            // contagem crescente
            for (var contando = inicio; contando <= fim; contando += intervalo) {
                res.innerHTML += `${contando}, `
            }
        } else {
            // contagem decrescente
            for (var contando = inicio; contando >= fim; contando -= intervalo) {
                res.innerHTML += `${contando}, `
            }
        }
    }
}

function sim() {
    var sim = window.document.getElementById('S')
    var vamos = window.document.getElementById("V")
    vamos.innerHTML = "Que bom que você gosta de maçã"
    
    var maça = window.document.createElement('img')
    var ores = window.document.getElementById('ores1')
    maça.setAttribute('id', 'maçã')
    maça.setAttribute('src', 'maçã.png')
    ores.innerHTML = 'Que bom, então toma mais uma </br>'
    ores.appendChild(maça)

}

function nao() {
    var não = window.document.getElementById('N')
    var vamos = window.document.getElementById('V')
    vamos.innerHTML = "Ah não tem problema"
}