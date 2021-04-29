import React from "react";

function Heading(props) {
  return (


    <table className="table">
      {console.log(props.result.results)}
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.result.results.map(employee => (
          <tr key={employee.name.first}>
            <td className="name"><img src={employee.picture.thumbnail}></img></td>
            <td className="name">{employee.name.first} {employee.name.last}</td>
            <td className="name">{employee.email}</td>
            <td className="name">{employee.phone}</td>
            <td className="name">{employee.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Heading;
