//usando axios
axios.get('https://api.github.com/users/estermarques')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })
