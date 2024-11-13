
const name = 'world';
console.log(`Hello ${name}`);

/*swal({
    title: "",
    className: "background-viana-hello"
});*/

const Swal = require('sweetalert2')
const sweet = Swal.mixin({
    customClass: {
        container: "background-viana-hello",
        popup: "background-viana-hello-popup",
        confirmButton: "background-viana-hello-btn",
    }
});

sweet.fire({title:'Benvingut Viana do Castelo: Una Joia Històrica i Cultural de Portugal'});