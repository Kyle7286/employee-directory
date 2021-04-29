import React from "react";

function Table(props) {
  return (
    <table className="table table-striped mt-5">
      {console.log(props.result.results)}
      <thead>
        <tr>
          <th scope="col" className="text-center"><button onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Image</button></th>
          <th scope="col" className="text-center"><button onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Name</button></th>
          <th scope="col" className="text-center"><button onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Email</button></th>
          <th scope="col" className="text-center"><button onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Phone</button></th>
          <th scope="col" className="text-center"><button onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">DOB</button></th>
        </tr>
      </thead>
      <tbody className="">
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