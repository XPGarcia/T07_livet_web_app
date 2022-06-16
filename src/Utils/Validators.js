function required(value) {
  if (value.length > 0) return null;
  return {
    hasError: true,
    message: "Este campo es requerido"
  };
}

function Validator(value, validations) {
  let data = { hasError: false, message: "" };
  // eslint-disable-next-line no-restricted-syntax
  for (const validation of validations) {
    switch (validation) {
      case "required":
        data = required(value) ?? data;
        break;
      default:
        break;
    }
    if (data.hasError) break;
  }
  return data;
}

export default Validator;
