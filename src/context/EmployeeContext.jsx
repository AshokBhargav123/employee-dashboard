import { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  const save = (data) => {
    setEmployees(data);
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const addEmployee = (emp) => {
    save([...employees, emp]);
  };

  const updateEmployee = (emp) => {
    save(employees.map(e => e.id === emp.id ? emp : e));
  };

  const deleteEmployee = (id) => {
    save(employees.filter(e => e.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{
      employees,
      addEmployee,
      updateEmployee,
      deleteEmployee
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};
