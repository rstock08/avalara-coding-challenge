import React from "react";
import { IForm } from "../containers/FormContainer";

interface IFormComponentProps {
    data: IForm
}

export default function FormComponent(props: IFormComponentProps) {
    return (
        <div>
            Hello Form
        </div>
    )
}