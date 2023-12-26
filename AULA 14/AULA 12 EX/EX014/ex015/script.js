function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert ('[erro] Verifique os dados e tente novamente')
   } else { 
    var fsex = document.getElementsByName('radsex')
    var idade = ano-Number(fano.value)
    var genero =""
    var img = document.createElement('img')
    Image.setAtribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade>=0 && idade < 10) {
            // Criança
            Image.setAtribute('src', 'homem menino.jpg')
        } else if (idade < 21) {
            // Jovem
            Image.setAtribute('src', 'homem jovem.jpg')
        } else if (idade < 50) {
            // Adulto   
            Image.setAtribute('src', 'homem adulto.jpg')
        } else {
            // Idoso
            Image.setAtribute('src', 'homem idoso.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade>=0 && idade < 10) {
            // Criança
            Image.setAtribute('src', 'mulher menina.jpg')
        } else if (idade < 21) {
            // Jovem
            Image.setAtribute('src', 'mulher jovem.jpg')
        } else if (idade < 50) {
            // Adulto     
            Image.setAtribute('src', 'mulher adulta.jpg')     
        } else {
            // Idoso
            Image.setAtribute('src', 'mulher idosa.jpg')
        }
    }
   
    res.style.textAlign = 'center'
    res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}
