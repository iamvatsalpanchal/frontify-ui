var main = document.querySelector("#main")
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(event){
  cursor.style.left = event.pageX + 'px';
  cursor.style.top = event.pageY + 'px';
});
