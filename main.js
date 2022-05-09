var anime = document.querySelectorAll('.image')
    
function searchAnimeBYName() {
    var searchAnime = document.getElementById("searchbox").value;

    for (var i = 0; i < anime.length; i++) {
        if (anime[i].getAttribute('alt').toLowerCase().includes(searchAnime.toLowerCase())) {
            anime[i].classList.remove("is-hidden");
        } else {
            anime[i].classList.add("is-hidden");
        }
    }
}


var time;
var inter= 300;
var input = document.getElementById('searchbox');

input.addEventListener('keyup', () => {
    clearTimeout(time);
    time= setTimeout(searchAnimeBYName, inter);
});
 


