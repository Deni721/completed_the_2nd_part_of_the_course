import { useEffect, useState } from 'react'
import SearchPerson from './components/SearchPerson'
import RenderPerson from './components/Render person/RenderPerson'
import Forma from './components/Forma/Forma'
import { service } from './components/service/Service'
import './index.css'

function App() {

let[persons,setPersons]=useState([])
let[newName,setNewName]=useState('')
let[newNumber,setNewNumber]=useState('')
let[search,setSearch]=useState([{}])
let[succesAddPerson,setsuccesAddPerson]=useState(false)
let[errorAddPerson,seterrorAddPerson]=useState(false)

// ПОЛУЧЕНИЕ ДАННЫХ С JSON-SERVERA

useEffect(()=>{

console.log('start useEffect')
service.get().then((data) => setPersons(data))

},[])

// ОБРАБОТКА КНОПКИ
const handleFormClick=(ev)=>{

ev.preventDefault()
let newPerson={name:newName,number:newNumber,important:Math.random() > 0.5}
let copy=[...persons]


let findPerson=copy.find( el=> el.name===newPerson.name)
let findNumber=copy.find(el => el.number===newNumber)
console.log(findNumber,findPerson)

if (findPerson===undefined&&findNumber===undefined) {
 copy.push(newPerson)
 service.create(newPerson)
 setPersons(copy)
 setsuccesAddPerson(true)
 setInterval(()=>{setsuccesAddPerson(false)},5000)

}else if (findPerson!==undefined&&findNumber===undefined) {
  service.formUpd(findPerson,newNumber,seterrorAddPerson)

setPersons(copy.map( el => {

    if(el.name===findPerson.name){
       el.number=newNumber
    }
    return el

  }))

}else if (findPerson!==undefined&&findNumber!==undefined ) {
   alert(`${findPerson.name} is already added to phonebook`)

}

setNewName('')
setNewNumber('')
}

// ОБРАБОТКА ПОЛЯ NAME
const handleChangeName=(ev)=>{
setNewName(ev.target.value)

}

// ОБРАБОТКА ПОЛЯ NUMBER
const handleChangeNumber=(ev)=>{
setNewNumber(ev.target.value)
}

// ОБРАБОТКА ПОЛЯ SEARCH
const handleSearch=(ev)=>{
let val=ev.target.value.toLowerCase().trim()

 if(val.length){

  let arr=persons.filter( el=>{
  let str=el.name.toLowerCase()
  let start=str.startsWith(val)
  return start && el.name
})
setSearch(arr)

}else{
setSearch([])
}
}

//ОБРАБОТКА КЛИКА КНОПКИ Toggler important

const handleTogglerImp= (ID) => {
let url =`http://localhost:3003/persons/${ID}`

let findPerson=persons.find( el => el.id===ID)
let dataChange={...findPerson,important:!findPerson.important}

service.update(url,dataChange,ID,setPersons,persons)
}


return (
  <div>
    <h2>Phonebook</h2>

    <SearchPerson handleSearch={handleSearch} search={search} />

    <Forma
      newName={newName}
      handleChangeName={handleChangeName}
      newNumber={newNumber}
      handleChangeNumber={handleChangeNumber}
      handleFormClick={handleFormClick}
      suc={succesAddPerson}
      err={errorAddPerson}
    />

    <h2>Contacts</h2>

    <RenderPerson persons={persons} handleTogglerImp={handleTogglerImp} set={setPersons} err={seterrorAddPerson}/>

    <p>Debug:{newName}</p>
  </div>
);
}

export default App
