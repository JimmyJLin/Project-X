$(function(){
  console.log('script file loaded')
  // loader
  $('.ui.segment.loader').dimmer('show');

  // image uploading
  var readURL = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('.profile-pic').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $(".file-upload").on('change', function(){
    console.log("hello from file-upload")
    readURL(this);
  });


  // multiple-select & simple-select dropdown
  $('.ui.dropdown').dropdown({
    allowAdditions: true
  });
  $('select.dropdown')
    .dropdown('set selected', [])
  ;
  $(".ui.normal.dropdown")
    .dropdown()



  // sign in / sign out / forget password Modal
  $('#applicant_login_button').on('click', function(){
    console.log("applicant_login_button clicked")
    $('.ui.small.modal.applicant.login').modal('show')
  })

  $('#applicant_login_submit_button').on('click', function(){
    console.log("applicant_login_submit_button clicked")
    $('.ui.small.modal.applicant.login').modal({
      onApprove: function(){
        window.alert('Approved')
        return true
      }
    }).modal('show')
  })

  $('#applicant_signup_button').on('click', function(){
    console.log("signup_button clicked")
    $('.ui.small.modal.applicant.signup').modal('show')
  })

  $('#employer_login_button').on('click', function(){
    console.log("employer_login_button clicked")
    $('.ui.small.modal.employer.login').modal('show')
  })

  $('#employer_signup_button').on('click', function(){
    console.log("signup_button clicked")
    $('.ui.small.modal.employer.signup').modal('show')
  })

  $('#applicant_profile_signup_button').on('click', function(){
    console.log("profile signup_button clicked")
    $('.ui.small.modal.applicant.signup').modal('show')
  })

  $('#applicant_profile_login_button').on('click', function(){
    console.log("applicant_login_button clicked")
    $('.ui.small.modal.applicant.login').modal('show')
  })

  $('#employer_profile_login_button').on('click', function(){
    console.log("employer_login_button clicked")
    $('.ui.small.modal.employer.login').modal('show')
  })

  $('#employer_profile_signup_button').on('click', function(){
    console.log("profile signup_button clicked")
    $('.ui.small.modal.employer.signup').modal('show')
  })


  $('#employer_profile_form_signup_button').on('click', function(){
    console.log("profile signup_button clicked")
    $('.ui.small.modal.applicant.signup').modal('show')
  })

  $('#reset_password_button').on('click', function(){
    console.log("signup_button clicked")
    $('.ui.small.modal.reset_password').modal('show')
  })

  // navigate to about us div
  $('#about_us_button').click(function(){
    $('html,body').animate({
      scrollTop: $('#about_us_div').offset().top
    }, 'slow');
  })





})
