import FindPerson from "./FindPerson"

export default function SearchPerson({handleSearch,search}) {
  return <>
  <input type="text" onChange={handleSearch}/>
  <FindPerson search={search}/>
</>
}
