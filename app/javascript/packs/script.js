document.addEventListener('DOMContentLoaded', (event) => {
  /* Avatar upload functionality for user registration */
  var readURL = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0])
    }
  }
  $('.file-upload').on('change', function(){
    readURL(this);
  });
  $('.upload-button').on('click', function(){
    $('.file-upload').click();
  });
})

/* Initialize tooltips */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Scroll to the developers section when the start button is clicked */
const startBtn = document.getElementById('js-start-btn')
const devSection = document.getElementById('js-developers')
if (startBtn !== null) {
  startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    devSection.scrollIntoView({behavior: 'smooth', block: 'start'})
  })
}
