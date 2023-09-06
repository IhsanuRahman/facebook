$(function(){
    jQuery.validator.addMethod("includeNumber",  function(value) {
            return /[0-9]/.test(value);
      });
      jQuery.validator.addMethod("includeLowerCase",  function(value) {
        return /[a-z]/.test(value);
  });
  jQuery.validator.addMethod("includeUpperCase",  function(value) {
    return /[A-Z]/.test(value);
});
    $("#signup-form").validate({
        rules:{
            required:true,
            fname:{
                required:true,
                minlength:4,
            },
            eop:{
                email:true,
                required:true
            },
            password:{
                required:true,
                includeNumber: true,
                includeLowerCase:true,
                includeUpperCase:true
            },
            gender:{
                required:true
            },
            date:{
                required:true
            },

        },
      
        messages:{
            password:{
                includeNumber:"password must contain number",
                includeLowerCase:"password must contain lowercase letter",
                includeUpperCase:"password must contain lowercase letter",

            }
        }
    })
})