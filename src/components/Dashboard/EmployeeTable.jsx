import React from "react";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="table-container">
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td><img src={emp.image} width="40" /></td>
            <td>{emp.name}</td>
            <td>{emp.gender}</td>
            <td>{emp.dob}</td>
            <td>{emp.state}</td>
            <td>{emp.active ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
              <button onClick={() => window.print()}>Print</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default EmployeeTable;
