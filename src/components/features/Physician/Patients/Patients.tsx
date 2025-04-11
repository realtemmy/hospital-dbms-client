import PatientCard from "../../../patient-card/PatientCard";

// type patientInfo = {
//   name: string;
//   email: string;
//   timeSlot: string;
//   id: string;
//   address: string;
//   mobile: string;
//   bloodGroup: string;
// };
const Patients = () => {
  const patients = [
    {
      name: "Temiloluwa Oreoluwa",
      email: "temiloluwaogunti8@gmail.com",
      timeSlot: "10:30 - 11:00 AM",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8066771553",
      bloodGroup: "A+",
      id: "1234",
    },
  ];
  return (
    <div>
      {patients.map((patient) => (
        <PatientCard patient={patient} />
      ))}
    </div>
  );
};

export default Patients;
