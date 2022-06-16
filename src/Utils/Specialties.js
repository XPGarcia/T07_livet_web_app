const Specialties = {
  CARDIOLOGY: {
    code: "cardiology",
    color: "#D9534F"
  },
  GENERAL_MEDICINE: {
    code: "general_medicine",
    color: "#5CB85C"
  },
  GINECOLOGY: {
    code: "gynecology",
    color: "#F0AD4E"
  },
  PEDIATRICS: {
    code: "pediatrics",
    color: "#E26DC9"
  },
  SERUM_THERAPY: {
    code: "serum_therapy",
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

export { pickColor };
export default Object.freeze(Specialties);
