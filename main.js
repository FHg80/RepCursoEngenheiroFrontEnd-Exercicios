$(document).ready(function() {

    const nome = document.getElementById('nome');
    const username = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');
    const endpoint = 'https://api.github.com/users/FHg80'

    fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nome.innerHTML = json.name;
        username.innerHTML = '@' + json.login;
        avatar.src = json.avatar_url;
        repos.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;        
        link.href = json.html_url;
    })
    .catch(function(e) {
        console.log('Ocorreu um erro ao requisitar as informações', e);
    })
})