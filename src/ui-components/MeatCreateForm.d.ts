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
export declare type MeatCreateFormInputValues = {
    name?: string;
    price?: number;
    specialPrice?: number;
    image?: string;
};
export declare type MeatCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    specialPrice?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeatCreateFormOverridesProps = {
    MeatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    specialPrice?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeatCreateFormProps = React.PropsWithChildren<{
    overrides?: MeatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MeatCreateFormInputValues) => MeatCreateFormInputValues;
    onSuccess?: (fields: MeatCreateFormInputValues) => void;
    onError?: (fields: MeatCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeatCreateFormInputValues) => MeatCreateFormInputValues;
    onValidate?: MeatCreateFormValidationValues;
} & React.CSSProperties>;
export default function MeatCreateForm(props: MeatCreateFormProps): React.ReactElement;
