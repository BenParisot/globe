//backend logic

// function Card (name, image, address) {
//   this.name = name;
//   this.image = image;
//   this.address = address;
// }



//frontend logic
$(document).ready(function(){
  $("form#address").submit(function(event){
    event.preventDefault();
    var firstName = $("#firstname").val();
    var fullAddress = $("#fullAddress").val();
    console.log(firstName);
    console.log(fullAddress);

  });
});
