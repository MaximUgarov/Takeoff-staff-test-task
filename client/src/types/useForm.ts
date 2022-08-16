import type { ChangeEvent, FocusEvent, FormEvent } from "react";

interface UseFormOptionsValidationRulesItem {
    [validationType: string]: string | number | boolean
}

export interface UseFormOptionsValidationRules {
    [fieldId: string]: UseFormOptionsValidationRulesItem
}

export interface UseFormOptionsInitialValues {
    [field: string]: any; //тип определяться из параметров;
}

interface UseFormDataValue {
    isTouched: boolean,
    isValid: boolean,
    errorText: string,
    value: string | number
}

export interface UseFormDataValues {
    [propName: string]: UseFormDataValue
}

export interface UseFormResult {
    data: UseFormDataValues,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: FocusEvent<HTMLInputElement>) => void,
    onSubmitForm: (e: FormEvent<HTMLFormElement>) => void,
    resetValues: () => void
}