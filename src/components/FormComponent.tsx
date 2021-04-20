import { Container, TextField } from "@material-ui/core";
import React from "react";
import { IFields, IForm, IFormFieldsData } from "../containers/FormContainer";
import TextComponent from "./TextFieldComponent";
import SelectComponent from "./SelectComponent";
import RadioComponent from "./RadioComponent";

interface IFormComponentProps {
    formData: IFormFieldsData[];
    formType: string;
}

function mapFormInputFields(field: IFormFieldsData) {
    switch (field.type) {
        case "text": {
            return <TextComponent />
        }
        case "select": {
            return <SelectComponent />
        }
        case "radio": {
            return <RadioComponent />
        }
        default: {
            return null;
        }
    }
}



export default function FormComponent(props: IFormComponentProps) {
    return (
        <Container maxWidth="xs" style={{ paddingTop: "5rem" }}>

            {props.formData.map((field: IFormFieldsData) => {
                return mapFormInputFields(field)
            })}

        </Container>
    )
}