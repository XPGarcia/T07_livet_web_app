const patients = [
  {
    id: 1,
    name: "Xavier García",
    ssn: "0912345678",
    birthDate: "1997-12-19",
    gender: "M",
    civilStatus: "Soltero",
    address: "Sauces 6 Mz 125 Villa 41",
    state: "Guayas",
    city: "Guayaquil",
    phone: "2147583",
    cellphone: "0913784698",
    email: "xavier.garcia@test.com"
  },
  {
    id: 2,
    name: "Patricio Baño",
    ssn: "0912345699",
    birthDate: "1997-12-19",
    gender: "M",
    civilStatus: "Soltero",
    address: "",
    state: "",
    city: "",
    phone: "2147583",
    cellphone: "0913784698",
    email: "xavier.garcia@test.com"
  }
];

// eslint-disable-next-line consistent-return
function getPatient(ssn) {
  // eslint-disable-next-line no-restricted-syntax
  for (const patient of patients) {
    if (patient.ssn === ssn) return patient;
  }
}

export default getPatient;
