import React from "react";
import Button from "./Button";

function Portfolio(props) {
  console.log(props);
  // const data=[
  //     {
  //         name:"Suraj Singh",
  //         email:"suraj@gmail.com",
  //         mobNo:"895124562",
  //         address:"Dewas"
  //     },
  //     {
  //         name:"Dipu",
  //         email:"dipu@gmail.com",
  //         mobNo:"245628951",
  //         address:"Indore"
  //     },
  //     {
  //         name:"Mahendra Singh",
  //         email:"mahendra@gmail.com",
  //         mobNo:"895124562",
  //         address:"Satna"
  //     },
  //     {
  //         name:"Vikas",
  //         email:"vikas@gmail.com",
  //         mobNo:"895124562",
  //         address:"Dewas"
  //     }
  // ]
  // const personList =  data.map(person => <li>I am {person.name} , my email id is  {person.email}, my mobile no. is {person.mobNo} and my address is {person.address} </li>)
  return (
    <>
      {/* <div className="name-list">
    <table border='1px solid' style={{textAlign:"center"}}>
        <th>
            <td>Name</td>
            <td>Email</td>
            <td>Mob no.</td>
            <td>Address</td>
        </th>     
    </table>
    <ul>
       {personList}
     </ul> 
</div> */}

      {/* <tr>
        <td style={{ fontSize: props.fontSize }}>{props.name}</td>
        <td>
          <img src={props.surajImg} alt="" />
        </td>
        <td>{props.email}</td>
        <td>{props.mobno}</td>
        <td>{props.address}</td>
      </tr> */}

      {/* <p><strong>Name:</strong>{props.name}</p>
    <p><strong>Email:</strong>{props.email}</p>
    <p><strong>mobNo:</strong>{props.mobno}</p>
    <p><strong>Address:</strong>{props.address}</p> */}
      {/* <Button
        surajText={props.suraj}
        fontSize1={props.fontSize}
        color1={props.fontColor}
      /> */}
    </>
  );
}
// export default Portfolio;
