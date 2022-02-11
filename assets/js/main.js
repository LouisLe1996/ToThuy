
function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function runword(input) {

        var word = input;
        var show = word.charAt(0);
        for (let i = 1; i <word.length;i++) {
            show += word.charAt(i);
            document.getElementById("display").innerHTML = show;
           await timeout(100);
        }

}

function no_click(){
    document.getElementById("display").innerHTML = "Anh biết là em thương anh mà :))";
}
function yes_function(){
    runword("Cám ơn em vì đã yêu anh");
}
function no_function(){
    document.getElementById("no_button").innerHTML = "Có";
    no_click();
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
}

function mouseover() {
  document.getElementById("no_button").innerHTML = "Có";
}

function mouseout() {
  document.getElementById("no_button").innerHTML = "Không";
}
