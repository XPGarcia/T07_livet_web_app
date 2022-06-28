const records = [
  {
    id: 1,
    patientId: 1,
    date: "2022-06-10T14:15",
    preparation: {
      bloodPressure: "100/70",
      heartRate: "98",
      breathingFrequency: "46",
      temperature: "37",
      oxygenSaturation: "99",
      height: "168",
      weight: "64"
    },
    consultationReasons: {
      reasonsAbstract: "Dolor en el tobillo",
      reasonsDescription:
        "Dolor cuando se mueve o se toca en el tobillo luego de un mal movimiento y contacto jugando basquet"
    },
    backgroundData: {
      personalBackgrounds: [{ id: 1, name: "Diabetes tipo 1" }],
      familyBackgrounds: [
        { id: 2, name: "Abuela con osteoporsisi" },
        { id: 3, name: "Madre con diabetes tipo 2" }
      ]
    },
    currentProblem: {
      currentProblem:
        "Esguince de ligamento del tobillo derecho causado por fuerte lesión de contacto"
    },
    physicalExam: {
      extremidades: {
        active: true,
        description: "Esguince en el tobillo"
      }
    },
    organSystemReview: {
      neurologico: {
        active: true,
        description: "Dolor en los nervios cerca del pie"
      }
    },
    diagnostic: {
      data: [{ id: 1, name: "Esguince en el tobillo derecho" }]
    },
    treatment: {
      data: {
        1: [
          {
            id: Math.floor(Math.random() * 100) + 1,
            diagnosticId: 1,
            treatmentFields: {
              medicine: "Paracetamol",
              presentation: "100mg",
              quantity: "20",
              indications:
                "Tomar una cápsula cada 8 horas después de cada comida"
            }
          },
          {
            id: Math.floor(Math.random() * 100) + 1,
            diagnosticId: 1,
            treatmentFields: {
              medicine: "Umbral",
              presentation: "500mg",
              quantity: "10",
              indications: "Tomar una pastilla antes de domir por 10 días"
            }
          }
        ]
      },
      recomendation:
        "No realizar actividad física durante 3 meses. Asistir a todas las sesiones de rehabilitación."
    }
  },
  {
    id: 2,
    patientId: 1,
    date: "2022-05-21T09:30",
    preparation: {
      bloodPressure: "110/70",
      heartRate: "88",
      breathingFrequency: "48",
      temperature: "37",
      oxygenSaturation: "99",
      height: "168",
      weight: "64"
    },
    consultationReasons: {
      reasonsAbstract: "",
      reasonsDescription: ""
    },
    backgroundData: {
      personalBackgrounds: [],
      familyBackgrounds: []
    },
    currenProblem: {
      currentProblem: ""
    },
    physicalExam: {},
    organSystemReview: {},
    diagnostic: {
      data: []
    },
    treatment: {
      data: {}
    }
  },
  {
    id: 3,
    patientId: 1,
    date: "2022-01-16T14:00",
    preparation: {
      bloodPressure: "12'/70",
      heartRate: "89",
      breathingFrequency: "50",
      temperature: "37",
      oxygenSaturation: "99",
      height: "168",
      weight: "64"
    },
    consultationReasons: {
      reasonsAbstract: "",
      reasonsDescription: ""
    },
    backgroundData: {
      personalBackgrounds: [],
      familyBackgrounds: []
    },
    currenProblem: {
      currentProblem: ""
    },
    physicalExam: {},
    organSystemReview: {},
    diagnostic: {
      data: []
    },
    treatment: {
      data: {}
    }
  }
];

function getMedicalRecords(patiendId) {
  return records.filter((data) => data.patientId === patiendId);
}

export default getMedicalRecords;
