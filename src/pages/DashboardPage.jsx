// import { useContext, useState } from "react";
// import { EmployeeContext } from "../context/EmployeeContext";
// import SummaryCards from "../components/Dashboard/SummaryCards";
// import EmployeeTable from "../components/Dashboard/EmployeeTable";
// import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
// import Filters from "../components/Dashboard/Filters";
// import "./DashboardPage.css";

// const DashboardPage = () => {
//     const { employees, addEmployee, updateEmployee, deleteEmployee } =
//         useContext(EmployeeContext);

//     const [editing, setEditing] = useState(null);
//     const [search, setSearch] = useState("");
//     const [gender, setGender] = useState("");
//     const [status, setStatus] = useState("");

//     const filtered = employees
//         .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
//         .filter((e) => (gender ? e.gender === gender : true))
//         .filter((e) => (status ? e.active === (status === "active") : true));

//     return (
//         <>
        
//             <div className="dashboard-header">
//                 <h1>Employee Management Dashboard</h1>
//             </div>

//             <SummaryCards employees={employees} />
//             <Filters
//                 setSearch={setSearch}
//                 setGender={setGender}
//                 setStatus={setStatus}
//             />
//             <EmployeeForm
//                 editing={editing}
//                 onSave={(emp) => {
//                     editing ? updateEmployee(emp) : addEmployee(emp);
//                     setEditing(null);
//                 }}
//             />
//             <EmployeeTable
//                 employees={filtered}
//                 onEdit={setEditing}
//                 onDelete={deleteEmployee}
//             />
//         </>
//     );
// };

// export default DashboardPage;


import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import SummaryCards from "../components/Dashboard/SummaryCards";
import Filters from "../components/Dashboard/Filters";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import EmployeeTable from "../components/Dashboard/EmployeeTable";
import "./DashboardPage.css";

const DashboardPage = () => {
  const { employees, addEmployee, updateEmployee, deleteEmployee } =
    useContext(EmployeeContext);

  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  // const filtered = employees
  //   .filter((e) =>
  //     e.name.toLowerCase().includes(search.toLowerCase())
  //   )
  //   .filter((e) => (gender ? e.gender === gender : true))
  //   .filter((e) =>
  //     status ? e.active === (status === "active") : true
  //   );

  // ✅ FIXED FILTER LOGIC
  const filtered = employees.filter((emp) => {
    const matchesSearch =
      search.trim() === "" ||
      emp.name?.toLowerCase().includes(search.trim().toLowerCase());

    const matchesGender =
      gender === "" || emp.gender === gender;

    const matchesStatus =
      status === "" ||
      emp.active === (status === "active");

    return matchesSearch && matchesGender && matchesStatus;
  });

  return (
    <div className="dashboard">
      <div className="app-container">
        
        {/* Header */}
        <div className="dashboard-header">
          <h1>Employee Management Dashboard</h1>
        </div>

        {/* Summary Cards */}
        <SummaryCards employees={employees} />

       

        {/* Employee Form */}
        <EmployeeForm
          editing={editing}
          onSave={(emp) => {
            editing ? updateEmployee(emp) : addEmployee(emp);
            setEditing(null);
          }}
        />

         {/* Filters */}
        <Filters
          setSearch={setSearch}
          setGender={setGender}
          setStatus={setStatus}
        />

        {/* Employee Table */}
        <EmployeeTable
          employees={filtered}
          onEdit={setEditing}
          onDelete={deleteEmployee}
        />

      </div>
    </div>
  );
};

export default DashboardPage;
