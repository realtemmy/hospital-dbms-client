export {};

declare global {
  type User = {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    emailVerified: boolean;
    email: string;
    role: "Patient" | "Physician" | "Admin";
    photo: string;
    phone: string;
    address: string;
    gender: string;
    dateOfBirth: Date;
    socials: [string];
    emergencyContacts: [object];
    expire: boolean;
  };

  type Appointment = {
    id: string;
    patient: User;
    physician: User;
    type: "general" | "follow-up" | "emergency" | "consultation" | "surgery";
    timeSlot: string;
    date: Date;
    time: Date;
    status: "scheduled" | "confirmed" | "completed" | "cancelled" | "no-show";
    createdBy: User | string;
    notes: string;
  };

  type Physician = {
    id: string;
    user: User;
    specialization: "Doctor" | "Pharmacist" | "Radiologist" | "Nurse";
    qualifications: [string];
    department: string;
    licenseNumber: number;
    yearsOfExperience: number;
  };

  type Patient = {
    user: User;
    bloodType: string;
    bloodGroup: "A" | "B" | "AB" | "O";
    genotype: "AA" | "AS" | "AC" | "SS" | "CC" | "SC";
    allergies: [string];
    appointments: Appointment[] | string;
    rhFactor: boolean;
  };
}
