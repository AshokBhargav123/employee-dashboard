// import React from "react";
// import "./Filters.css";

// const Filters = ({ setSearch, setGender, setStatus }) => {
//   return (
//     <div className="filters">
//       <input placeholder="Search by name" onChange={e => setSearch(e.target.value)} />

//       <select onChange={e => setGender(e.target.value)}>
//         <option value="">All Gender</option>
//         <option>Male</option>
//         <option>Female</option>
//       </select>

//       <select onChange={e => setStatus(e.target.value)}>
//         <option value="">All Status</option>
//         <option value="active">Active</option>
//         <option value="inactive">Inactive</option>
//       </select>
//     </div>
//   );
// };

// export default Filters;


import React from "react";
import "./Filters.css";

const Filters = ({ setSearch, setGender, setStatus }) => {
  return (
    <div className="filters">
      {/* Search */}
       <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Gender Filter */}
      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">All Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {/* Status Filter */}
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default Filters;
