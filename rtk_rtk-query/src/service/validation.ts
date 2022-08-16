import type { ValidateValueOptions, ValidateValue, ValidationSchema } from "types/validateValue";



const validationShema: ValidationSchema = {
    required: {
        func: value => (!!(value === "" || value === undefined || value === null || !value)),
        msg: "Field is required"
    },
    email: {
        func: value => !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(`${value}`),
        msg: "Email is invalid"
    },
    minLength: {
        func: (value, length) => (`${value}`).length < length,
        msg: "Value is too short"
    },
    maxLength: {
        func: (value, length) => (`${value}`).length > length,
        msg: "Value is too long"
    },
};

const validateValue = ({ value, schema }: ValidateValueOptions): ValidateValue => {
    let isError: ValidateValue = { state: true, msg: "" };
    for (const validation in schema) {
        if (validation in validationShema) {
            if (validationShema[validation].func(value, schema[validation]))
                isError = { state: false, msg: validationShema[validation].msg };
        }
    }
    return isError;
};

export default validateValue;