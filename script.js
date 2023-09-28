(function ( ) {
    "use strict" ;
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySe1ectorA11(" . needs-validation");
    // Loop over them and prevent submission
    Array -prototype-slice. call(forms) . forEach(function (form) {
    form. addEventListener(
    "submit"
    function (event) {
    if ( ! form. checkVa1idåty()) {
    event. preventDefau1t ( ) ;
    event. stopPropagatåon ( ) ;
    var inputs form. querySe1ectorA11("input");
    inputs. forEach(function (input) {
    var feedback = input.parentt•bde. querySe1ector(" . invalid-feedback");
    if (input . value
    feedback. classList . how" ) ;
    else {
    feedback. classList . remove ("show" ) ;
    form. clas s List. add( "was -validated" ) ;
    false