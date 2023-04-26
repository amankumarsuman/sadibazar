/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Milk } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MilkUpdateFormInputValues = {
    name?: string;
    price?: number;
    specialPrice?: number;
    image?: string;
};
export declare type MilkUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    specialPrice?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MilkUpdateFormOverridesProps = {
    MilkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    specialPrice?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MilkUpdateFormProps = React.PropsWithChildren<{
    overrides?: MilkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    milk?: Milk;
    onSubmit?: (fields: MilkUpdateFormInputValues) => MilkUpdateFormInputValues;
    onSuccess?: (fields: MilkUpdateFormInputValues) => void;
    onError?: (fields: MilkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MilkUpdateFormInputValues) => MilkUpdateFormInputValues;
    onValidate?: MilkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MilkUpdateForm(props: MilkUpdateFormProps): React.ReactElement;
