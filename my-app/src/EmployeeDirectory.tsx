import EmployeeCard from "./EmployeeCard";

function EmployeeDirectory() {
  let employees = [
    {
      id:101,
      name: "Mohammed",
      position: "HR Manager",
      department: "HR",
      salary: 6000,
    },
    {
      id:102,
      name: "Sarah",
      position: "Software Engineer",
      department: "Engineering",
      salary: 7500,
    },
    {
      id:103,
      name: "John",
      position: "Project Manager",
      department: "IT",
      salary: 8000,
    },
    {
      id:104,
      name: "Emily",
      position: "Marketing Director",
      department: "Marketing",
      salary: 7000,
    },
    {
      id:105,
      name: "David",
      position: "Financial Analyst",
      department: "Finance",
      salary: 6500,
    },
    {
      id:106,
      name: "Arif",
      position: "Financial Auditor",
      department: "Finance",
      salary: 8000,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-warning text-center mb-4">List of Employees</h2>
      <div className="row g-4">
        {employees.map((emp) => (
          <div className="col-md-4">
            <EmployeeCard
              name={emp.name}
              position={emp.position}
              department={emp.department}
              salary={emp.salary}
            ></EmployeeCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDirectory;
