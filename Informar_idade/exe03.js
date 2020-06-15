function verificar(){
    let res = document.getElementById('res')
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let idade = ano - Number(fAno.value)
    let fsex = document.getElementsByName('radsex')
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
        genero = 'h'
        res.innerHTML = `Detectamos: homem com ${idade} anos`
    }
    else if(fsex[1].checked){
        genero = 'm'
        res.innerHTML = `Detectamos: mulher com ${idade} anos`
    }

    if(fAno.value.length ==0 || fAno.value > ano){
        window.alert('Verifique os dados e tente novamente')
        res.innerHTML = 'Verifique os dados e tente novamente'
    }else if(fAno.value > ano - 5){
        img.setAttribute('src', genero + 'Bebe.png')
    }else if(fAno.value > ano - 22){
        img.setAttribute('src', genero + 'Jovem.png')
    }else if(fAno.value > ano - 60){
        img.setAttribute('src', genero + 'Adulto.png')
    }else if(fAno.value > ano - 105){
        img.setAttribute('src', genero + 'Velho.png')
    }else{
        window.alert('Idade improvável de estar vivo!')
        res.innerHTML = 'Idade improvável de estar vivo!'
    }
    res.appendChild(img)
}