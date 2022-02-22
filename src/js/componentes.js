import '../css/componentes.css';
// import  webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'Sin nombre') => { // para exportar está función, se deberá escribir un export al antes de la funcion

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

    //Img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}
