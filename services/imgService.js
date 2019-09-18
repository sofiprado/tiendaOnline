let self = {}

self.imgsArray = [
  {
    nombre: "Maceta con planta",
    imagen: "https://i.pinimg.com/564x/39/6a/33/396a33b85f76dc0571a46eaaf7126666.jpg",
    precio: 250
  },
  {
    nombre: "Florero durmiente",
    imagen: "https://i.pinimg.com/564x/40/c1/33/40c133a5fb3721c407efcce3eddda01e.jpg",
    precio: 530
  },
  {
    nombre: "Maceta con rayas" ,
    imagen: "https://i.pinimg.com/564x/08/3d/b7/083db75b7560fff8072db1533b67dc68.jpg",
    precio: 600 
  },
  {
    nombre:"Terrario",
    imagen: "https://i.pinimg.com/564x/6e/e8/c4/6ee8c44484d3d4320ae626d7c1199567.jpg",
    precio: 200 
  },
  {
    nombre: "Maceta cactus grande",
    imagen: "https://i.pinimg.com/564x/31/d4/fc/31d4fc349d64cbe9302d8e6438d0d6cd.jpg",
    precio: 970
  },
  {
    nombre: "Maceta pensante" ,
    imagen: "https://i.pinimg.com/564x/f7/d1/06/f7d106d30322c19e4c1e82237542646c.jpg",
    precio: 700 
  }
]

self.add = function(data){ 
 console.log(data)
this.imgsArray.push({
  nombre: data.nombre,
  imagen: data.imagen,
  precio: data.precio
});
return this.imgsArray 
}

module.exports = self;