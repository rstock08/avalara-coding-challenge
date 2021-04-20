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

    const handleChange = ((val: any) => {
        console.log(val);
        let newFormData = [...formData];
        const index = formData.findIndex(x => x.name === val.currentTarget.name);
        if (index !== -1) {
            newFormData[index].value = val.currentTarget.value;
        }
        setFormData(newFormData);
    })

    return (
        <FormComponent formData={formData} formType={formType} handleChange={handleChange} />
    );
}