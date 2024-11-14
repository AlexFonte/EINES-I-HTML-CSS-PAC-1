import bacalhau from "../img/bacalhau.jpg";
import bolasberlim1 from "../img/bolas-berlim-1.jpg";
import coracao from "../img/coracao.jpg";
import estacao from "../img/estacao.jpg";
import festas from "../img/festas.jpg";
import festas3 from "../img/festas-3.jpg";
import gileannes from "../img/gil-eannes.jpg";
import hombrecamara from "../img/hombre-camara.jpg";
import mapa from "../img/mapa.jpg";
import meialuas from "../img/meia-luas.jpg";
import museutraje from "../img/museu-traje.webp";
import ponteeiffel from "../img/ponte-eiffel.jpg";
import pontelima from "../img/ponte-lima.jpg";
import praiacabedelo from "../img/praia-cabedelo.webp";
import santaluzia5 from "../img/santa-luzia-5.jpg";
import santaluzia10 from "../img/santa-luzia-10.jpg";
import santaluzia11 from "../img/santa-luzia-11.jpg";
import santaluzia12 from "../img/santa-luzia-12.jpg";
import sarrabulho from "../img/sarrabulho.jpg";
import torta from "../img/torta.webp";
import viana from "../img/viana.jpg";
import viana2 from "../img/viana-2.jpg";
import vianaav from "../img/viana-av.jpg";
import vianaavenida from "../img/viana-avenida.jpg";
import logogold from "../img/logos/logo-gold.png";
import logored from "../img/logos/logo-red.png";
import data from '../data.json';  // Ruta relativa al archivo JSON


const tBody = document.querySelector('#t-links tbody');

console.log(data);

data.forEach(resource => {
    let tr = document.createElement("tr");

    let image = document.createElement("td");
    image.setAttribute("headers", "name");
    image.classList.add("t-img-1");
    let div = document.createElement("div");
    div.classList.add("images");
    let img = document.createElement("img");
    img.src = getImage(resource.img_name);

    div.appendChild(img);
    image.appendChild(div);
    tr.appendChild(image);

    let categoria = document.createElement("td");
    categoria.setAttribute("headers", "categoria");
    categoria.textContent = resource.ubicacion;
    tr.appendChild(categoria);
    
    let author = document.createElement("td");
    author.setAttribute("headers", "autor");
    author.textContent = resource.author;
    tr.appendChild(author);

    let copyright = document.createElement("td");
    copyright.setAttribute("headers", "copyright");
    copyright.textContent = resource.copyright;
    tr.appendChild(copyright);

    let link = document.createElement("td");
    link.setAttribute("headers", "link");
    link.innerHTML = `<a href="${resource.link}" target="_blank">Aquí</a>`;
    tr.appendChild(link);

    tBody.appendChild(tr);

});

function getImage(name) {
    let img;
    switch (name) {
        case 'bacalhau':
            img = bacalhau;
            break;
        case 'bolasberlim1':
            img = bolasberlim1;
            break;
        case 'coracao':
            img = coracao;
            break;
        case 'estacao':
            img = estacao;
            break;
        case 'festas':
            img = festas;
            break;
        case 'festas3':
            img = festas3;
            break;
        case 'gileannes':
            img = gileannes;
            break;
        case 'hombrecamara':
            img = hombrecamara;
            break;
        case 'mapa':
            img = mapa;
            break;
        case 'meialuas':
            img = meialuas;
            break;
        case 'museutraje':
            img = museutraje;
            break;
        case 'ponteeiffel':
            img = ponteeiffel;
            break;
        case 'pontelima':
            img = pontelima;
            break;
        case 'praiacabedelo':
            img = praiacabedelo;
            break;
        case 'santaluzia5':
            img = santaluzia5;
            break;
        case 'santaluzia10':
            img = santaluzia10;
            break;
        case 'santaluzia11':
            img = santaluzia11;
            break;
        case 'santaluzia12':
            img = santaluzia12;
            break;
        case 'sarrabulho':
            img = sarrabulho;
            break;
        case 'torta':
            img = torta;
            break;
        case 'viana':
            img = viana;
            break;
        case 'viana2':
            img = viana2;
            break;
        case 'vianaav':
            img = vianaav;
            break;
        case 'vianaavenida':
            img = vianaavenida;
            break;
        case 'logogold':
            img = logogold;
            break;
        case 'logored':
            img = logored;
            break;
        default:
            img = null;
    }
    return img;
}

