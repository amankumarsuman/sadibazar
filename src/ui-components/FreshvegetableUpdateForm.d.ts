/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Freshvegetable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FreshvegetableUpdateFormInputValues = {
    name?: string;
    price?: number;
    specialPrice?: number;
    image?: string;
};
export declare type FreshvegetableUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    specialPrice?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FreshvegetableUpdateFormOverridesProps = {
    FreshvegetableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    specialPrice?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FreshvegetableUpdateFormProps = React.PropsWithChildren<{
    overrides?: FreshvegetableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    freshvegetable?: Freshvegetable;
    onSubmit?: (fields: FreshvegetableUpdateFormInputValues) => FreshvegetableUpdateFormInputValues;
    onSuccess?: (fields: FreshvegetableUpdateFormInputValues) => void;
    onError?: (fields: FreshvegetableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FreshvegetableUpdateFormInputValues) => FreshvegetableUpdateFormInputValues;
    onValidate?: FreshvegetableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FreshvegetableUpdateForm(props: FreshvegetableUpdateFormProps): React.ReactElement;
