import { Container } from "@material-ui/core";
import React from "react";
import { IFormFieldsData } from "../containers/FormContainer";
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
            return (
                <TextComponent
                    value={field.value}
                    name={field.name}
                    label={field.label}
                    description={field.description}
                    key={field.displayOrder}
                />
            )
        }
        case "select": {
            return <SelectComponent
                value={field.value}
                name={field.name}
                label={field.label}
                description={field.description}
                key={field.displayOrder}
                options={field.options as string[]}
            />
        }
        case "radio": {
            return (
                <RadioComponent
                    value={field.value}
                    name={field.name}
                    label={field.label}
                    description={field.description}
                    options={field.options as string[]}
                />
            )
        }
        default: {
            return null;
        }
    }
}



export default function FormComponent(props: IFormComponentProps) {
    return (
        <Container maxWidth="xs" style={{ paddingTop: "5rem" }}>

            {props.formData.sort((n1, n2) => n1.displayOrder - n2.displayOrder).map((field: IFormFieldsData) => {
                return (
                    <div style={{ paddingBottom: "2rem" }}>
                        {(mapFormInputFields(field))}
                    </div>
                )
            })}

        </Container>
    )
}