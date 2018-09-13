document.addEventListener('DOMContentLoaded', function() {
  var modal = document.querySelector('.modal')
  var signIn = document.querySelector('.signin')
  signIn.addEventListener('click', function() {
    modal.style.display = 'block'
  })
  var closeButton = document.querySelector('.close')
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none'
  })

   var submitbutton = document.querySelector('.getstarted')
   submitbutton.addEventListener("click", function(e) {
    if(e.target.classList.contains("submit")) {
    document.querySelector('#user').className = "error";
    document.querySelector('#pass').className = "error";
    };
  });

     var inputField = document.querySelector('.getstarted')
     inputField.addEventListener("mouseover", function(e) {
      if(e.target.classList.contains("error")) {
      e.target.classList.remove("error");
      };
    });
 })
