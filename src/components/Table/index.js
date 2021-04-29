import React from "react";

function Table(props) {
  return (
    <table className="table">
      {console.log(props.result.results)}
      <thead>
        <tr>
          <th scope="col" className="text-center">Image</th>
          <th scope="col" className="text-center">Name</th>
          <th scope="col" className="text-center">Email</th>
          <th scope="col" className="text-center">Phone</th>
          <th scope="col" className="text-center">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.result.results.map(employee => (
          <tr key={employee.name.first}>
            <td className="image text-center"><img alt="employee profile" src={employee.picture.thumbnail}></img></td>
            <td className="name  text-center pt-4">{employee.name.first} {employee.name.last}</td>
            <td className="email text-center pt-4">{employee.email}</td>
            <td className="phone text-center pt-4">{employee.phone}</td>
            <td className="dob pt-4">{employee.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
