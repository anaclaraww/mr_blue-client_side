let count = 1
document.getElementById("radio1").checked = true

setInterval(function () {
    nextImage()
}, 7000)

document.getElementById("btn-radio1").style.backgroundColor = "#8c8c8c"

function nextImage() {
    for (let i = 1; i <= 2; i++) {
        document.getElementById("btn-radio" + i).style.backgroundColor = "";
        
    }
    count++;
    console.log("i = " + count);
    if (count > 2) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true
    document.getElementById("btn-radio" + count).style.backgroundColor = "#8c8c8c"
}
