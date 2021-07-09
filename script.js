function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length <= 3 || fAno.value > ano ){
        alert('[ERRO] CONFIRA O ANO INSERIDO');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade= ano - fAno.value;
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            
            if(idade >= 0 && idade <=1){
                img.setAttribute('src', 'bebemasculino.png')
                genero = 'Bebe'
            }else if(idade >= 2 && idade <= 10){
                img.setAttribute('src', 'criancamasculino.png')
                genero = 'criança'
            }else if (idade >= 11 && idade <= 20){
                img.setAttribute('src', 'adolescentemasculino.png')
                genero = 'Adolescente'
            }else if (idade >= 21 && idade <= 40){
                img.setAttribute('src', 'adultomasculino.png')
                genero = 'Homem'
            }else{
                img.setAttribute('src', 'idosomasculino.png')
                genero = 'Idoso'
            }
        }else if(fsex[1].checked){
            
            if(idade >= 0 && idade <=1){
                img.setAttribute('src', 'bebefeminino.png')
                genero = 'Bebe'
            }else if(idade >= 2 && idade <= 10){
                genero = 'Criança'
                img.setAttribute('src', 'criancafeminino.png')
            }else if (idade >= 11 && idade <= 20){
                //aborrecente
                img.setAttribute('src', 'adolescentefeminino.png')
                genero = 'Adolescente'
            }else if (idade >= 21 && idade <= 40){  
                img.setAttribute('src', 'adultofeminino.png')
                genero = 'Mulher'
            }else{
                //idoso
                img.setAttribute('src', 'idosofeminino.png')
                genero = 'Idosa'
            }            
        }
        res.style.textAlign = 'center'; // acessando css direito 
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`);
        res.appendChild(img)
    
    }


}