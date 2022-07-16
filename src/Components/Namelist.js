import React from 'react'

function Namelist() {
    /*const names =['plax', 'sjsa','hove','Teda']
    const namelist =  names.map((name )=> <h2>{names}</h2>)
  return (
    <div>
        { 
            namelist
        }
    </div>
  )*/
  const persons = [ 
    {
        id :1,
        name :'plax',
        age :80,
        skill : React
    },
    {
        id :2,
        name :'Hove',
        age :100,
        skill : 'Vue'
    },
    {
        id :3,
        name :'Alphah',
        age :805,
        skill : 'Agular'
    },
    {
        id :4,
        name :'Neldah',
        age :105,
        skill : 'Birix'
    }
  ]
  const personList =persons.map((p) =>(
   <h2>
    My name is {p.name} . I am {p.age} years old .My id is {p.id}  
   </h2>))
   return (
    <div>{personList}</div>
   )
}

export default Namelist
