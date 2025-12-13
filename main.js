let searchBox = document.getElementById("searchBox");

const search = ()=>{
    let input = searchBox.value;
    if(input.trim() !== ''){
        input = input.replaceAll(' ','+')
        window.open('https://www.youtube.com/results?search_query='+ input)
    }

}
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    search();
});
// 