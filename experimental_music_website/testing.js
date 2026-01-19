// console.log(typeof null);

function search()
{
    var x = document.getElementById("search-input").value() // store seach keywords
    const url = "https://music.youtube.com/";
    var url1 = url + x;
    var win = window.open(url1, "_blank"); 
    win.focus;

    
}