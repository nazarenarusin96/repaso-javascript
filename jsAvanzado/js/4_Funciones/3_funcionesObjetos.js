//* Creando un objeto que solicite información y poder hardcodear 

const reproductor ={

    reproducir: (id)=>{
        console.log(`Reproduciendo canción con el id: ${id}`);
    },

    pausar: ()=>{
        console.log("pausando...");
    },

    borrar: (id)=>{
        console.log(`Eliminando canción con el id: ${id}`);
    },

    crearPlaylist: (nombre)=>{
        console.log(`Creando playlist: ${nombre}`);
    },

    reproducirPlaylist: (nombre)=>{
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(78);
reproductor.reproducir(56);
reproductor.reproducir(105);
reproductor.reproducir(89);
reproductor.pausar();
reproductor.borrar(105);
reproductor.crearPlaylist("Musiquita");
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Cumbia");
reproductor.crearPlaylist("Jazz");
reproductor.reproducir("Musiquita");

const probandoArrowFunctions = () => "Linea de código sin console. log()"

const aprendientoTecnologia = tecnologia => `Aprendiendo: ${tecnologia}` //! Cuando se le pasa UN SOLO parámetro, no es necesario utilizar parentesis

console.log(aprendientoTecnologia("Javascript"));