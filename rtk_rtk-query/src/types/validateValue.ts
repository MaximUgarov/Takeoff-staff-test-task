export interface ValidationItem {
    func: (value: string | number, param: string | number | boolean) => boolean,
    msg: string
}

export interface ValidationSchema {
    [type: string]: ValidationItem
}

interface ValidationRules {
    [validType: string]: string | number | boolean
}

export interface ValidateValueOptions {
    value: string | number,
    schema: ValidationRules
}

export interface ValidateValue {
    state: boolean,
    msg: string
}
