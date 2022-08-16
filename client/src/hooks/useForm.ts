import type { UseFormDataValues, UseFormOptionsInitialValues, UseFormOptionsValidationRules, UseFormResult } from "types/useForm";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { useState } from "react";

import validateValue from "service/validation";



const initialValue = {
    isTouched: false,
    isValid: true,
    errorText: ""
};

function useForm<Values extends UseFormOptionsInitialValues = UseFormOptionsInitialValues>({ initalValues, onSubmit, validationShema }:
    { initalValues: Values, onSubmit: (values: Values) => void, validationShema?: UseFormOptionsValidationRules, }) {
    const initialValues: UseFormDataValues = Object.keys(initalValues)
        .reduce((p, c) => ({ ...p, [c]: { ...initialValue, value: initalValues[c] } }), {});

    const [data, setData] = useState<UseFormDataValues>(initialValues);

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>
        setData({ ...data, [e.target.id]: { ...initialValue, value: e.target.value } });

    const onBlur = (e: FocusEvent<HTMLInputElement>) =>
        setData({ ...data, [e.target.id]: { ...data[e.target.id], isTouched: true } });

    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataKeys = Object.keys(data);
        const checkValidation = dataKeys.reduce((p, key) =>
        ({
            ...p,
            [key]: {
                ...data[key],
                isValid: validationShema ? validateValue({ value: data[key].value, schema: validationShema[key] }).state : true,
                errorText: validationShema ? validateValue({ value: data[key].value, schema: validationShema[key] }).msg : ""
            }
        }), {} as UseFormDataValues);
        setData(checkValidation);
        if (dataKeys.find(key => !checkValidation[key].isValid)) return;
        const formData: Values = dataKeys.reduce((p, key) => ({ ...p, [key]: data[key].value }), {} as Values);
        return onSubmit(formData);
    };

    const resetValues = (): void => setData(initialValues);

    return { data, onChange, onBlur, onSubmitForm, resetValues } as UseFormResult;
}

export default useForm;