function contar() {
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var passo = document.getElementById('txtp')
   var res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) 
    window.alert (`[Erro] Faltam dados!`)
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio,value)
        let f = Number(fim,value)
        let p = Number(passo.value)

        for(let c=1; c<=f; c++p) {
            res.innerHTML== `s(c)`
        }
       
    } 
