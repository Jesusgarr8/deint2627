import React from 'react'

export default function clase(){
  const isTeacher = false

  const foods = [
    {
      id: 1,
      nombre: "Paella",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT06FaFgsZxX6j3l5YQUCzq727CTgXvyPQQH8XLljKsAEUnfhBro0ErHM&s=10"
    },
    {
      id: 2,
      nombre: "Tortilla de Patatas",
      imagen: "https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-1200x828.jpg"
    },
    {
      id: 3,
      nombre: "Gazpacho",
      imagen: "https://i.blogs.es/e64620/gazpacho/840_560.jpg"
    },
    {
      id: 4,
      nombre: "Patatas Bravas",
      imagen: "https://www.goya.com/wp-content/uploads/2023/10/spicy-potatoes.jpg"
    },
    {
      id: 5,
      nombre: "Fabada Asturiana",
      imagen: "https://imag.bonviveur.com/fabada-asturiana.jpg"
    }
  ];

  //let number = 0

const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number +1)
    console.log(number)
  }
  return (


    <div className=" ">



      <Button styles="text-white bg-blue-800 cursor-pointer" title="Home"
        active={true} onClickButton={() => alert("Home")}></Button>

      <Button styles="text-white bg-red-800 cursor-pointer" title="Configuracion"
        active={true} onClickButton={() => alert("Home")}></Button>


      <div className="flex flex-row gap-3 p-2">
        <Product title="Zapatillas" desc="Deportivas nike" price={120}></Product>
        <Product title="padel" desc="adidas" price={120}></Product>
      </div>
      <h2 className="text-4xl text-green-800">Configuracion moodle</h2>
      <ul className="list-inside list-disc">
        <li>LogOut</li>
        <li>Modulos</li>
        {isTeacher && <li>Alumnos</li>}
      </ul>


      <h2 className="text-4xl text-green-800">Menu del dia</h2>
      <div className="flex felx-row justify-around gap-1">
        {
          foods.map((f) => {
            return (
              <Food key={f.id} nombre={f.nombre} imagen={f.imagen} ></Food>
            )

          })
        }

        <Button styles="text-white bg-green-600" title={`contador: ${number}`}
          active={true} onClickButton={addOne}>

        </Button>
      </div>
    </div>




  );() {
  return (
    <div>
  const isTeacher = false

  const foods = [
    {
      id: 1,
      nombre: "Paella",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT06FaFgsZxX6j3l5YQUCzq727CTgXvyPQQH8XLljKsAEUnfhBro0ErHM&s=10"
    },
    {
      id: 2,
      nombre: "Tortilla de Patatas",
      imagen: "https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-1200x828.jpg"
    },
    {
      id: 3,
      nombre: "Gazpacho",
      imagen: "https://i.blogs.es/e64620/gazpacho/840_560.jpg"
    },
    {
      id: 4,
      nombre: "Patatas Bravas",
      imagen: "https://www.goya.com/wp-content/uploads/2023/10/spicy-potatoes.jpg"
    },
    {
      id: 5,
      nombre: "Fabada Asturiana",
      imagen: "https://imag.bonviveur.com/fabada-asturiana.jpg"
    }
  ];

  //let number = 0

const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number +1)
    console.log(number)
  }
  return (


    <div className=" ">



      <Button styles="text-white bg-blue-800 cursor-pointer" title="Home"
        active={true} onClickButton={() => alert("Home")}></Button>

      <Button styles="text-white bg-red-800 cursor-pointer" title="Configuracion"
        active={true} onClickButton={() => alert("Home")}></Button>


      <div className="flex flex-row gap-3 p-2">
        <Product title="Zapatillas" desc="Deportivas nike" price={120}></Product>
        <Product title="padel" desc="adidas" price={120}></Product>
      </div>
      <h2 className="text-4xl text-green-800">Configuracion moodle</h2>
      <ul className="list-inside list-disc">
        <li>LogOut</li>
        <li>Modulos</li>
        {isTeacher && <li>Alumnos</li>}
      </ul>


      <h2 className="text-4xl text-green-800">Menu del dia</h2>
      <div className="flex felx-row justify-around gap-1">
        {
          foods.map((f) => {
            return (
              <Food key={f.id} nombre={f.nombre} imagen={f.imagen} ></Food>
            )

          })
        }

        <Button styles="text-white bg-green-600" title={`contador: ${number}`}
          active={true} onClickButton={addOne}>

        </Button>
      </div>
    </div>




  );</div>
  )
}
}