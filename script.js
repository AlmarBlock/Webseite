function Level_Jumper() 
{
  const iframe = document.getElementById("level_jumper");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.zIndex = "999999";
  iframe.style.top = "0px";
  iframe.style.position = "fixed";
  iframe.style.borderRadius = "0";
  history.pushState({}, null, "");
}

function Minesweeper() 
{
  const iframe = document.getElementById("minesweeper");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.zIndex = "999999";
  iframe.style.top = "0px";
  iframe.style.position = "fixed";
  iframe.style.borderRadius = "0";
  history.pushState({}, null, "");
}

function reset()
{
    window.open("./games.html" , "_self");
}

window.addEventListener("popstate", function(event) {
    reset();
});
