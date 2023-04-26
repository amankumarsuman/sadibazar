/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Meat } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MeatUpdateFormInputValues = {
    name?: string;
    price?: number;
    specialPrice?: number;
    image?: string;
};
export declare type MeatUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    specialPrice?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeatUpdateFormOverridesProps = {
    MeatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    specialPrice?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeatUpdateFormProps = React.PropsWithChildren<{
    overrides?: MeatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meat?: Meat;
    onSubmit?: (fields: MeatUpdateFormInputValues) => MeatUpdateFormInputValues;
    onSuccess?: (fields: MeatUpdateFormInputValues) => void;
    onError?: (fields: MeatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeatUpdateFormInputValues) => MeatUpdateFormInputValues;
    onValidate?: MeatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MeatUpdateForm(props: MeatUpdateFormProps): React.ReactElement;
