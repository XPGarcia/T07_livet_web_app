const Specialties = {
  CARDIOLOGY: {
    code: "cardiology",
    name: "Cardiología",
    color: "#D9534F"
  },
  GENERAL_MEDICINE: {
    code: "general_medicine",
    name: "Medicina General",
    color: "#5CB85C"
  },
  GINECOLOGY: {
    code: "gynecology",
    name: "Ginecología",
    color: "#F0AD4E"
  },
  PEDIATRICS: {
    code: "pediatrics",
    name: "Pediatría",
    color: "#E26DC9"
  },
  SERUM_THERAPY: {
    code: "serum_therapy",
    name: "Terapia de Sueros",
    color: "#714BC3"
  }
};

function pickColor(code) {
  switch (code) {
    case Specialties.CARDIOLOGY.code:
      return Specialties.CARDIOLOGY.color;
    case Specialties.GENERAL_MEDICINE.code:
      return Specialties.GENERAL_MEDICINE.color;
    case Specialties.GINECOLOGY.code:
      return Specialties.GINECOLOGY.color;
    case Specialties.PEDIATRICS.code:
      return Specialties.PEDIATRICS.color;
    case Specialties.SERUM_THERAPY.code:
      return Specialties.SERUM_THERAPY.color;
    default:
      return null;
  }
}

function getName(code) {
  switch (code) {
    case Specialties.CARDIOLOGY.code:
      return Specialties.CARDIOLOGY.name;
    case Specialties.GENERAL_MEDICINE.code:
      return Specialties.GENERAL_MEDICINE.name;
    case Specialties.GINECOLOGY.code:
      return Specialties.GINECOLOGY.name;
    case Specialties.PEDIATRICS.code:
      return Specialties.PEDIATRICS.name;
    case Specialties.SERUM_THERAPY.code:
      return Specialties.SERUM_THERAPY.name;
    default:
      return null;
  }
}

export { pickColor, getName };
export default Object.freeze(Specialties);
