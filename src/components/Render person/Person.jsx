
export default function Person({el,handleTogglerImp,handleDelete}) {

  return (
    <div>
        <li> {el.name}  { el.number ? el.number : 'not number' }  
           <button  onClick={ () => handleTogglerImp(el.id)}> Toggler important </button> 
           <button onClick={ () => handleDelete (el.id) }>Delete</button>
        </li>
    </div>
  )
}
