function carregar(){
    var mensagem=document.querySelector('#msg')
    var imagem=document.querySelector('img')  
     var data=new Date()
     var hora=data.getHours()
     var minutos = data.getMinutes()

mensagem.innerHTML= (`Agora são ${hora} horas e ${minutos} minutos.`)

if(hora>=0 &&hora<=12){
    imagem.src = 'img/pexels-nicole-avagliano-2152410.jpg'
    document.body.style.background='#e2cd9f'
}
else if (hora>12&&hora<18){
    imagem.src = 'img/pexels-mark-munsee-1058592.jpg'
    document.body.style.background='#b9846f'

}
else {
    imagem.src = 'img/pexels-rachel-claire-4993264.jpg'
    document.body.style.background='#515154'

}
}