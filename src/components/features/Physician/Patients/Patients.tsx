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
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8066771553",
      bloodGroup: "A+",
      id: "1234",
    },
    {
      name: "Realtemmy Akorede",
      email: "temmy4jamb@gmail.com",
      timeSlot: "11:00 - 11:30 AM",
      date: "Friday, June 26th",
      address:
        "9, Ayedogbon street, Olainukan, Isawo, Agric, Ikorodu, Lagos state",
      mobile: "8023456789",
      bloodGroup: "AB+",
      id: "1235",
    },
    {
      name: "Ifezzon Oluwashayo",
      email: "ifeoluwa@gmail.com",
      timeSlot: "11:30 - 12:00 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8066771553",
      bloodGroup: "O-",
      id: "1236",
    },
    {
      name: "Dumbor David",
      email: "David@mail.com",
      timeSlot: "12:00 - 12:30 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8012345678",
      bloodGroup: "B+",
      id: "1237",
    },
    {
      name: "Oluwatobi Temitope",
      email: "tobi@email.com",
      timeSlot: "12:30 - 1:00 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8098765432",
      bloodGroup: "A-",
      id: "1238",
    },
    {
      name: "Adeola Oluwaseun",
      email: "adeola@email.com",
      timeSlot: "1:00 - 1:30 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8062571401",
      bloodGroup: "AB-",
      id: "1239",
    },
  ];
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-2">
      {patients.map((patient, index) => (
        <PatientCard key={index} patient={patient} />
      ))}
    </div>
  );
};

export default Patients;
