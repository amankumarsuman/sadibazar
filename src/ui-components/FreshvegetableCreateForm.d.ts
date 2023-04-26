/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FreshvegetableCreateFormInputValues = {
    name?: string;
    price?: number;
    specialPrice?: number;
    image?: string;
};
export declare type FreshvegetableCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    specialPrice?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FreshvegetableCreateFormOverridesProps = {
    FreshvegetableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    specialPrice?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FreshvegetableCreateFormProps = React.PropsWithChildren<{
    overrides?: FreshvegetableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FreshvegetableCreateFormInputValues) => FreshvegetableCreateFormInputValues;
    onSuccess?: (fields: FreshvegetableCreateFormInputValues) => void;
    onError?: (fields: FreshvegetableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FreshvegetableCreateFormInputValues) => FreshvegetableCreateFormInputValues;
    onValidate?: FreshvegetableCreateFormValidationValues;
} & React.CSSProperties>;
export default function FreshvegetableCreateForm(props: FreshvegetableCreateFormProps): React.ReactElement;
