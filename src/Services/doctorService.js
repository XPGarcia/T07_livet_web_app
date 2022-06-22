const doctorsSaucesData = [
  {
    id: 1,
    name: "Xavier Patricio García Baño",
    specialty: "cardiology",
    schedule: [
      {
        id: 1000,
        startDate: "2022-06-21T09:30",
        endDate: "2022-06-21T10:30"
      },
      {
        id: 1001,
        startDate: "2022-06-21T10:30",
        endDate: "2022-06-21T11:00"
      },
      {
        id: 1002,
        startDate: "2022-06-21T14:00",
        endDate: "2022-06-21T14:30"
      },
      {
        id: 1003,
        startDate: "2022-06-21T17:00",
        endDate: "2022-06-21T17:30"
      }
    ]
  },
  {
    id: 2,
    name: "Xavier Patricio García Baño",
    specialty: "cardiology",
    schedule: [
      {
        id: 2000,
        startDate: "2022-06-21T09:30",
        endDate: "2022-06-21T10:30"
      },
      {
        id: 2001,
        startDate: "2022-06-21T10:30",
        endDate: "2022-06-21T11:00"
      },
      {
        id: 2002,
        startDate: "2022-06-21T14:00",
        endDate: "2022-06-21T14:30"
      },
      {
        id: 2003,
        startDate: "2022-06-21T17:00",
        endDate: "2022-06-21T17:30"
      }
    ]
  }
];

const doctorsDuranData = [
  {
    id: 1,
    name: "Xavier Patricio García Baño",
    specialty: "general_medicine",
    schedule: [
      {
        id: 1,
        startDate: "2022-06-21T09:30",
        endDate: "2022-06-21T10:30"
      },
      {
        id: 2,
        startDate: "2022-06-21T10:30",
        endDate: "2022-06-21T11:00"
      },
      {
        id: 3,
        startDate: "2022-06-21T14:00",
        endDate: "2022-06-21T14:30"
      },
      {
        id: 4,
        startDate: "2022-06-21T17:00",
        endDate: "2022-06-21T17:30"
      }
    ]
  }
];

function getDoctorList(specialty, medicalCenter) {
  switch (medicalCenter) {
    case "sauces":
      return doctorsSaucesData.filter((data) => data.specialty === specialty);
    case "duran":
      return doctorsDuranData.filter((data) => data.specialty === specialty);
    default:
      return [];
  }
}

export default getDoctorList;
