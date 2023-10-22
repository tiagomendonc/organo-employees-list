import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
  const { name, primaryColor, secundaryColor, employees } = props;

  return employees.length ? (
    <section className="team" style={{ backgroundColor: secundaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="employees">
        {employees.map((employee) => (
          <Employee
            key={`employee-${employee.name}-team-${name}`}
            name={employee.name}
            role={employee.role}
            image={employee.image}
          />
        ))}
      </div>
    </section>
  ) : null;
};

export default Team;
