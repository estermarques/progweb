//--------- ainda n botei no outro arquivo -----------------
//     AJAX

/*
var xhr = new XMLHttpRequest()

//xhr.open('GET', ~LINK DO MEU SITE~ )
//exemplo temporário:
xhr.open('GET', 'https://api.github.com/users/estermarques')
xhr.send(null)

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}
*/


/*
//promise
var minhaPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/estermarques')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

minhaPromise()
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })
*/

//usando axios
axios.get('https://api.github.com/users/estermarques')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })


//--------------------- ja ta la ----------------------
//salvando localmente
function saveToStorage(){
    localStorage.setItem('list', JSON.stringify(todas))
}
