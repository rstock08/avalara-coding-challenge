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
    value?: string;
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

    const [formData, setFormData] = useState([] as IFormFieldsData[]);
    const [formType, setFormtype] = useState("")

    useEffect(() => {
        setFormtype(dumbydata.formType);
        setFormData(dumbydata.data.fields);
    }, []);

    return (
        <FormComponent formData={formData} formType={formType} />
    );
}