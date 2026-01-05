// import { useState } from "react";
// import "./EmployeeForm.css";

// const EmployeeForm = ({ onSave, editing }) => {
//   const [emp, setEmp] = useState(editing || {
//     id: Date.now(),
//     name: "",
//     gender: "",
//     dob: "",
//     state: "",
//     active: true,
//     image: ""
//   });

//   const handleImage = (e) => {
//     const reader = new FileReader();
//     reader.onload = () => setEmp({ ...emp, image: reader.result });
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const submit = () => {
//     if (!emp.name || !emp.gender) return alert("Fill all fields");
//     onSave(emp);
//   };

//   return (
//     <div>
//       <input placeholder="Full Name" value={emp.name} onChange={e => setEmp({ ...emp, name: e.target.value })} />
//       <select onChange={e => setEmp({ ...emp, gender: e.target.value })}>
//         <option value="">Gender</option>
//         <option>Male</option>
//         <option>Female</option>
//       </select>
//       <input type="date" onChange={e => setEmp({ ...emp, dob: e.target.value })} />
//       <input placeholder="State" onChange={e => setEmp({ ...emp, state: e.target.value })} />
//       <input type="file" onChange={handleImage} />
//       {emp.image && <img src={emp.image} width="80" />}
//       <label>
//         <input type="checkbox" checked={emp.active} onChange={() => setEmp({ ...emp, active: !emp.active })} />
//         Active
//       </label>
//       <button onClick={submit}>Save</button>
//     </div>
//   );
// };

// export default EmployeeForm;


import { useState, useEffect } from "react";
import "./EmployeeForm.css";

const EmployeeForm = ({ onSave, editing }) => {
  const [emp, setEmp] = useState({
    id: Date.now(),
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  });

  // Populate form when editing
  useEffect(() => {
    if (editing) {
      setEmp(editing);
    }
  }, [editing]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setEmp({ ...emp, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const submit = () => {
    if (!emp.name || !emp.gender || !emp.dob || !emp.state) {
      alert("Please fill all fields");
      return;
    }
    onSave(emp);

    // Reset form after add
    if (!editing) {
      setEmp({
        id: Date.now(),
        name: "",
        gender: "",
        dob: "",
        state: "",
        active: true,
        image: ""
      });
    }
  };

  return (
    <div className="employee-form">
      <h3>{editing ? "Edit Employee" : "Add Employee"}</h3>

      <div className="form-grid">
        <input
          type="text"
          placeholder="Full Name"
          value={emp.name}
          onChange={(e) => setEmp({ ...emp, name: e.target.value })}
        />

        <select
          value={emp.gender}
          onChange={(e) => setEmp({ ...emp, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="date"
          value={emp.dob}
          onChange={(e) => setEmp({ ...emp, dob: e.target.value })}
        />

        <input
          type="text"
          placeholder="State"
          value={emp.state}
          onChange={(e) => setEmp({ ...emp, state: e.target.value })}
        />
      </div>

      {/* <div className="image-section">
        <input type="file" accept="image/*" onChange={handleImage} />

        {emp.image && (
          <img
            src={emp.image}
            alt="Profile Preview"
            className="preview"
          />
        )}
      </div> */}

      <div className="image-section">
  <input type="file" accept="image/*" onChange={handleImage} />

  {emp.image && (
    <div className="image-preview-wrapper">
      <img
        src={emp.image}
        alt="Profile Preview"
        className="image-preview"
      />
    </div>
  )}
</div>


      <label className="checkbox">
        <input
          type="checkbox"
          checked={emp.active}
          onChange={() => setEmp({ ...emp, active: !emp.active })}
        />
        Active
      </label>

      <button className="primary save-btn" onClick={submit}>
        {editing ? "Update Employee" : "Save Employee"}
      </button>
    </div>
  );
};

export default EmployeeForm;

