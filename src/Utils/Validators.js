function required(value) {
  if (value.length > 0) return null;
  return {
    hasError: true,
    message: "Este campo es requerido"
  };
}

function length(value, expected) {
  if (value.length === expected) return null;
  return {
    hasError: true,
    message: `Debe ser un valor de ${expected} caracteres`
  };
}

function isNumber(value) {
  const pattern = /^\d+$/;
  if (pattern.test(value)) return null;
  return {
    hasError: true,
    message: "Este campo debe ser un valor numérico."
  };
}

function Validator(value, validations, payload) {
  let data = { hasError: false, message: "" };
  // eslint-disable-next-line no-restricted-syntax
  for (const validation of validations) {
    switch (validation) {
      case "required":
        data = required(value) ?? data;
        break;
      case "length":
        data = length(value, payload.length) ?? data;
        break;
      case "number":
        data = isNumber(value) ?? data;
        break;
      default:
        break;
    }
    if (data.hasError) break;
  }
  return data;
}

export default Validator;
