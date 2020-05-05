/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var closebtns = document.getElementsByClassName("header-span");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.style.display = 'none';
})};