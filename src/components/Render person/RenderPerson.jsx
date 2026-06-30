import Person from "./Person";
import { nanoid } from "nanoid";
import { service } from "../service/Service";

export default function RenderPerson({ persons, handleTogglerImp,set}) {

  const handleDelete = (id) => {
    let permission = confirm("are you sure you want to delete");
    permission && service.del(id)
    
    let copy = [...persons].filter((el) => (permission ? el.id !== id : el));
    set(copy)
    
    
  };

  return (
    <ul>
      {" "}
      {persons.map((el) => (
        <Person
          key={nanoid(10)}
          el={el}
          handleTogglerImp={handleTogglerImp}
          handleDelete={handleDelete}

        />
      ))}{" "}
    </ul>
  );
}
