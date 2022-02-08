
export interface EmployeeInfo
{
  Name: string;
  Role: string;
  color: string;
}

export let Data: Object[] = [
  {
    Name: "Elizabeth",
    Role: "Director"
  },
  {
    Name: "Christina",
    ReportingPerson: "Elizabeth",
    Role: "Manager"
  },
  {
    Name: "Yoshi",
    ReportingPerson: "Christina",
    Role: "Lead"
  },
  {
    Name: "Philip",
    ReportingPerson: "Christina",
    Role: "Lead"
  },
  {
    Name: "Yang",
    ReportingPerson: "Elizabeth",
    Role: "Manager"
  },
  {
    Name: "Roland",
    ReportingPerson: "Yang",
    Role: "Lead"
  },
  {
    Name: "Yvonne",
    ReportingPerson: "Yang",
    Role: "Lead"
  }
];