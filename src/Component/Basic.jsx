import { useState } from "react";

const Basic = () => 
    {
            //const [numbers,setNumbers] = useState([10,20,30]);

    const Person = [
        {"id":1 ,"name":"Sathvik","dept":"DS"},
        {"id":2 ,"name":"Rahul","dept":"Mech"},
        {"id":3 ,"name":"Kiran","dept":"CS"}
      ];

const [personDetails,setPersonDetails] = useState(Person);

const AddRecord = () => 
{
//setNumbers([...numbers,"40"]);
const person = {"id":4 ,"name":"Abhi","dept":"CS"}; 
const match =  personDetails.find(p => p.id === person.id);
match == undefined ? setPersonDetails([...personDetails,person]) : alert("Record exists");
}

const RemoveRecord = () => 
{
const name = prompt("Enter name");
setPersonDetails(personDetails.filter(p => p.name != name));
}
return (
<section>
<table  border="1" style={{ borderCollapse: "collapse", width: "20%" }}>
<thead>
<tr>
<th>ID</th><th>Name</th><th>Dept</th>
</tr>
</thead>
<tbody>

{personDetails.map(p => (
<tr key={p.id}>
<td>{p.id}</td>
<td>{p.name}</td>
<td>{p.dept}</td>
</tr>

))}
{/*
{numbers.map(n => (
<tr key={Math.random()}><td>{n}</td></tr>
))}
*/}
</tbody>
</table>
<button onClick={AddRecord}>Add new record</button>
<button onClick={RemoveRecord}>Remove record</button>
</section>
);

    }

export default Basic;