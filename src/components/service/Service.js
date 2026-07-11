import axios from "axios"

 let BASE_URL =  'http://localhost:3001/api/persons'

const get=() => {
    return axios.get(BASE_URL).then(req => req.data).
    catch( err => console.log('Error getPerson:',err.message))
}

const create=(newPerson) => {
return axios.post(BASE_URL,newPerson).
then( (responce) => console.log(responce.status) ).
catch( (err) => console.log('Error create new Person:',err.message))
}

const update=(url,change,ID,setPersons,persons) => {
   return axios.put(url,change).
   then( responce => { setPersons( persons.map( el => el.id===ID ? responce.data : el))}).
   catch( err => console.log('Error Change Data Person:',err.message))
}

const formUpd=(obj,newNumber,setError)=>{
axios.put(BASE_URL + `/${obj.id}`,{...obj,number:newNumber}).catch( (err) =>{
        
        setError(true)
        setTimeout( () => {setError(false)},5000)
        console.log(err + ' Ошибка дошла!Service/formUpd')
    })
}

const del = (id)=>{
    return axios.delete(BASE_URL + `/${id}`)
}

export const base_url = BASE_URL
export  const service = {get,create,update,del,formUpd}