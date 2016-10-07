$(function(){
  console.log('script file loaded')

  $('.ui.dropdown').dropdown({
              allowAdditions: true
          });

  $('select.dropdown')
    .dropdown('set selected', [])
  ;

  // $(".ui.fluid.dropdown").dropdown({
  //   allowLabels:true
  // })
  //
  // $('.ui.fluid.dropdown').dropdown({
  //   'set selected': 'Role1,Role2'
  // });


  // sign in / sign out / forget password Modal
  $('#applicant_login_button').on('click', function(){
    console.log("applicant_login_button clicked")
    $('.ui.small.modal.applicant.login').modal('show')
  })

  $('#employer_login_button').on('click', function(){
    console.log("employer_login_button clicked")
    $('.ui.small.modal.employer.login').modal('show')
  })

  $('#applicant_signup_button').on('click', function(){
    console.log("signup_button clicked")
    $('.ui.small.modal.applicant.signup').modal('show')
  })

  $('#employer_signup_button').on('click', function(){
    console.log("signup_button clicked")
    $('.ui.small.modal.employer.signup').modal('show')
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
