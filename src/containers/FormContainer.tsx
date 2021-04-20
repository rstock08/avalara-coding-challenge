import React, { useEffect, useState } from "react";
import FormComponent from "../components/FormComponent";
import { dumbydata } from "../dumbydata";

interface IFormContainerProps {

}

export interface IForm {
    formType: string;
    data: IFields;
}

export interface IFields {
    fields: IFormFieldsData[]
}

export interface IFormFieldsData {
    name: string;
    type: string; // Switch to enum
    label: string;
    description: string;
    displayOrder: number;
    options?: string[];
}

export enum types {
    text = "text",
    select = "select",
    radio = "radio"
}

export default function FormContainer(props: IFormContainerProps) {

    const [formData, setFormData] = useState({} as IForm);

    useEffect(() => {
        setFormData(dumbydata);
    });

    return (
        <FormComponent data={formData} />
    );
}