module.exports = { isString, validate };

const STRING = "string";
function isString(string, regex) {
  if (typeof string === STRING || string instanceof String) {
    if (regex.test(string)) {
      return true;
    }
  }
  return false;
}

// function validate(data, schema) {
//   const messages = [];
//   for (const prop in data) {
//     if (!isString(data[prop], schema[prop].match)) {
//       messages.push({
//         property: prop,
//         message: schema[prop].message
//       });
//     }
//   }
//   if (messages.length) {
//     throw { statusCode: 400, message: messages };
//   }
// }

function validate(data, schema) {
  const message = [];
  for (const prop in schema) {
    const messages = [];
    for (const validator in schema[prop].message) {
      switch (validator) {
        case "required":
          if (schema[prop].required && !data[prop])
            messages.push(schema[prop].message[validator]);
          break;
        case "match":
          if (!isString(data[prop], schema[prop].match)) {
            messages.push(schema[prop].message[validator]);
          }
          break;
      }
    }
    if (messages.length) {
      message.push({ property: prop, message: messages });
    }
  }
  if (message.length) {
    throw { statusCode: 400, message };
  }
}
