
import Field from './Field'
import Button from './Button'

export default function Forma({newName,handleChangeName,newNumber,handleChangeNumber,handleFormClick,suc,err}) {
  
  return <form>
    {suc&&<p className='succesCreate'>A new contact has been created successfully</p>}
    {err&&<p className='errorCreate'>Error during user registration, check the data</p>}
    <div>
    <Field value={newName} change={handleChangeName} text='Name:'/>
    <Field value={newNumber} change={handleChangeNumber} text='Number:'/>
    </div>
    <></>
    <div>
      <Button handleFormClick={handleFormClick} text='Add Person'/>
    </div>
  </form>
}
