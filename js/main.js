var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// my jquery fade in code

let text = ["Driven", "Team-Player", "Accountable", "Funny", "Honest"];

counter = 0;

response = $("#quotation");

setInterval(change, 1500);

function change() {

response.fadeOut(function(){

    response.html(text[counter]);

    counter++;

    if(counter >= text.length) { counter = 0; }

    response.fadeIn();

});

}