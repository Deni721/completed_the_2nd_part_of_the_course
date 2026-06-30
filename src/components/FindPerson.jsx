
export default function FindPerson({search}) {
  return (
   <>
   {search.length===0 ? <p></p>: search.map( el=><p key={el.id+1}>{el.name}</p>)}
   </>
  )
}
