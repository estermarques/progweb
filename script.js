var jsonTextos = ['{"texto":"conteudo","tags":["tag1","tag2"],"id":1}']

var listaNotas = []

var notaAtual = 0

var listElement =  document.querySelector('#app')
var buttonCriar = document.querySelector('.criarNota')
var texto = document.querySelector('.texto')
var buttonSalvar = document.querySelector('.salvar')

//nao terminei
function fetchData(){
    setInterval(() => {
        const json = {
        id: idDocAbaDireita,
        texto: document.querySelector('.text').value,
        tags: document.querySelectorAll('.tag')
        }
        
        fetch('http://localhost:1999/texto/api',
        {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(json)
        }).then((res) => res.json()).then((json) => console.log(json))
        
    }, 5000);
}

function montaListaNotas(){
    jsonTextos.forEach((elem) => {
        let obj = JSON.parse(elem)
        listaNotas.push(obj)
    })
}

function renderNotas(){
    listElement.innerHTML = ''
    listaNotas.forEach((obj) =>{
        console.log("aqui")
        let notaDiv = document.createElement("DIV")
        notaDiv.classList.add("preview")

        obj.tags.forEach((tag) => {
            let novoSpam = document.createElement("SPAN")
            novoSpam.classList.add("tag")
            novoSpam.innerHTML = tag
            notaDiv.insertBefore(novoSpam,null)
        })

        let texto = document.createElement("P")
        texto.innerHTML = obj.texto
        notaDiv.insertBefore(texto,null)

        let botao = document.createElement('button')
        botao.classList.add('excluir')
        botao.innerHTML = 'X'
        let idNota = obj.id
        botao.setAttribute('onclick',`deletar(${idNota})`)
        notaDiv.insertBefore(botao,null)

        notaDiv.setAttribute("onclick",`selecionarNotaExistente(${idNota})`)

        listElement.insertBefore(notaDiv,null)

       
    })
}

inserirTag = () => {
    tagParaCriar = document.querySelector('.novaTag') 
    tagMae = document.querySelector('.areaTag')  //todas as tags ficam aqui
    tag = document.createElement("SPAN")    //cria um span
    tag.setAttribute('style','margin-right:10px')
    tag.classList.add('tag')
    tag.innerHTML = tagParaCriar.value
    tagParaCriar.value = ''
    tagMae.insertBefore(tag,null)
}

function criarNovaNota(){
    inputTag = document.querySelector('.novaTag')
    inputTag.value = ''
    tagMae = document.querySelector('.areaTag')
    tagMae.innerHTML = '<p>Adicionar tags:</p> <input class="novaTag" type="text" name="title"> <button onClick="inserirTag()" class="salvarTag">✓</button> <br>'
    inputTexto = document.getElementById('text')
    inputTexto.value = ''
    notaAtual = 0
}

function salvarNota(){
    const novoObj = {}
    novoObj.texto = texto.value
    novoObj.tags = []
    document.querySelectorAll('.areaTag > span').forEach((span) => novoObj.tags.push(span.innerHTML))
    
    if(notaAtual != 0){
        for(let index in listaNotas){
            if(listaNotas[index].id == notaAtual){
                novoObj.id = notaAtual
                listaNotas[index] = novoObj
            }
        }
    }
    else{
        if(listaNotas.length != 0){
            novoObj.id = listaNotas[listaNotas.length-1].id + 1
            notaAtual = novoObj.id
            listaNotas.push(novoObj)
        }
        else{
            notaAtual = 1
            novoObj.id = 1
            listaNotas.push(novoObj)
        }
    }
    renderNotas()
}

function selecionarNotaExistente(id){
    let obj = {}
    listaNotas.forEach((param) => {
        if(param.id == id){obj = param}
    })
    inputTag = document.querySelector('.novaTag')
    inputTag.value = ''
    tagMae = document.querySelector('.areaTag')
    tagMae.innerHTML = '<p>Adicionar tags:</p> <input class="novaTag" type="text" name="title"> <button onClick="inserirTag()" class="salvarTag">✓</button> <br>'
    obj.tags.forEach((tag) => {
        tagMae.innerHTML += `<span class="tag">${tag}</span>`
    })

    inputTexto = document.getElementById('text')
    inputTexto.value = obj.texto
    notaAtual = obj.id
}

function deletar(pos){
    novaLista = []
    listaNotas.forEach(obj => {
        if(obj.id != pos){novaLista.push(obj)}
    })
    console.log(pos)
    listaNotas = novaLista
    renderNotas()
}

montaListaNotas()
renderNotas()
