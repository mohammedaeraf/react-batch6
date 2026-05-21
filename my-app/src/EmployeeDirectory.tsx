import EmployeeCard from "./EmployeeCard";

function EmployeeDirectory() {
  let employees = [
    {
      name: "Mohammed",
      position: "HR Manager",
      department: "HR",
      salary: 6000,
    },
    {
      name: "Sarah",
      position: "Software Engineer",
      department: "Engineering",
      salary: 7500,
    },
    {
      name: "John",
      position: "Project Manager",
      department: "IT",
      salary: 8000,
    },
    {
      name: "Emily",
      position: "Marketing Director",
      department: "Marketing",
      salary: 7000,
    },
    {
      name: "David",
      position: "Financial Analyst",
      department: "Finance",
      salary: 6500,
    },
    {
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
