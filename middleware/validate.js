import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErros: true, allowUnionTypes: true });
addFormats(ajv);

const validate = (schema) => {
  const x = ajv.compile(schema);

  return (req, res, next) => {
    const valid = x(req.body);
    if (!valid) return res.status(400).json(x.errors);

    next();
  };
};

export default validate;
//This code exports a function called "validate" that takes in a JSON schema as an input. It then creates an instance of the Ajv library and compiles the passed-in schema. The returned function takes in a request, response, and "next" object as input and uses the compiled schema to validate the request body. If the request body is not valid, it sends a response with a status code of 400 and the validation errors. If the request body is valid, it calls the "next" function to move on to the next step in the middleware chain.
