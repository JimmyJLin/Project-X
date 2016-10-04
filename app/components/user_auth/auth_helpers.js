const $ = require('jquery');

module.exports = {
 login: function(email, pass, cb) {
   console.log('login inside the auth_helpers is fired', email,pass)
  //  cb = arguments[arguments.length - 1]
  //  if (localStorage.token) {
  //    if (cb) cb(true)
  //    this.onChange(true)
  //    return
  //  }
   loginRequest(email, pass, (res) => {
     console.log('loginRequest runs')
     if (res.authenticated) {
       localStorage.token = res.token
       if (cb) cb(true)
       this.onChange(true)
     } else {
       if (cb) cb(false)
       this.onChange(false)
     }
   })
 },

 getToken: function() {
   return localStorage.token
 },

 logout: function(cb) {
   delete localStorage.token
   if (cb) cb()
   this.onChange(false)
 },

 loggedIn: function() {
   return !!localStorage.token
 },

 onChange: function() {}
} // end of module.exports


function loginRequest(email, pass, cb) {

 var loginInfo = {
   email: email,
   password: pass
 }

 $.post('/api/auth/login', loginInfo)
   .done((data) => {
     console.log("login post : ", data);
     cb({
       authenticated: true,
       token: data.token

     })
   })
   .error((error) => {
     console.log(error);
     cb({
       authenticated: false
     })
   })
}
