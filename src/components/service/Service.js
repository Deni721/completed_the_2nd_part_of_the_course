import axios from "axios"

const get=() => {
    return axios.get('http://localhost:3003/persons').
    then( responce => responce.data).
    catch( err => console.log('Error getPerson:',err.message))
}

const create=(newPerson) => {
return axios.post('http://localhost:3003/persons',newPerson).
then( (responce) => console.log(responce.status) ).
catch( (err) => console.log('Error create new Person:',err.message))
}

const update=(url,change,ID,setPersons,persons) => {
   return axios.put(url,change).
   then( responce => { setPersons( persons.map( el => el.id===ID ? responce.data : el))}).
   catch( err => console.log('Error Change Data Person:',err.message))
}

const formUpd=(obj,newNumber,setError)=>{
axios.put(`http://localhost:3003/persons/${obj.id}`,{...obj,number:newNumber}).catch( (err) =>{
        
        setError(true)
        setTimeout( () => {setError(false)},5000)
        console.log(err + ' Ошибка дошла!Service/formUpd')
    })
}

const del = (id)=>{
    return axios.delete(`http://localhost:3003/persons/${id}`)
}

export  const service ={get,create,update,del,formUpd}