import Swal from 'sweetalert2';


const name = 'world';
console.log(`Hello ${name}`);

const sweet = Swal.mixin({
    customClass: {
        container: "background-viana-hello",
        popup: "background-viana-hello-popup",
        confirmButton: "background-viana-hello-btn",
    }
});

sweet.fire({title:'Benvingut Viana do Castelo: Una Joia Històrica i Cultural de Portugal'});