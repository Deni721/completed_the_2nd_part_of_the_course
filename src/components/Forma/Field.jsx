
export default function Field({value,change,text}) {
  return (
    <div>
     <label>{text}
      <input value={value} onChange={change}/>
    </label><br/>
    </div>
  )
}
