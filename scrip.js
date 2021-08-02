let buttons = document.getElementsByClassName("button");
let container = document.querySelector("#message");

buttons[0].addEventListener("click",buttonA);
buttons[1].addEventListener("click",buttonB);
buttons[2].addEventListener("click",buttonC);
buttons[3].addEventListener("click",buttonD);
buttons[4].addEventListener("click",buttonE);


function buttonA()
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Downloading A...";
    container.appendChild(newDiv);
    setTimeout(() => {
        newDiv.innerHTML = "A successfully downloaded.";
    }, 3000);
}
function buttonB()
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Downloading B...";
    container.appendChild(newDiv);
    setTimeout(() => {
        newDiv.innerHTML = "B successfully downloaded.";
    }, 3000);
}
function buttonC()
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Downloading C...";
    container.appendChild(newDiv);
    setTimeout(() => {
        newDiv.innerHTML = "C successfully downloaded.";
    }, 3000);
}
function buttonD()
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Downloading D...";
    container.appendChild(newDiv);
    setTimeout(() => {
        newDiv.innerHTML = "D successfully downloaded.";
    }, 3000);
}
function buttonE()
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Downloading E...";
    container.appendChild(newDiv);
    setTimeout(() => {
        newDiv.innerHTML = "E successfully downloaded.";
    }, 3000);
}