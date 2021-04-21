import { Container } from "@material-ui/core";
import { IFormFieldsData } from "../containers/FormContainer";
import TextComponent from "./TextFieldComponent";
import SelectComponent from "./SelectComponent";
import RadioComponent from "./RadioComponent";

interface IFormComponentProps {
    formData: IFormFieldsData[];
    formType: string;
    handleChange(val: any): void;
}

export default function FormComponent(props: IFormComponentProps) {

    const mapFormInputFields = ((field: IFormFieldsData) => {
        switch (field.type) {
            case "text": {
                return (
                    <TextComponent
                        value={field.value}
                        name={field.name}
                        label={field.label}
                        description={field.description}
                        uniqueKey={field.displayOrder}
                        handleChange={props.handleChange}
                    />
                )
            }
            case "select": {
                return <SelectComponent
                    value={field.value}
                    name={field.name}
                    label={field.label}
                    description={field.description}
                    uniqueKey={field.displayOrder}
                    handleChange={props.handleChange}
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
                        uniqueKey={field.displayOrder}
                        handleChange={props.handleChange}
                    />
                )
            }
            default: {
                return null;
            }
        }
    })

    return (
        <Container maxWidth="xs" style={{ paddingTop: "5rem" }}>

            {props.formData.sort((n1, n2) => n1.displayOrder - n2.displayOrder).map((field: IFormFieldsData, index: number) => {
                return (
                    <div key={`div-form-field-${index}`} style={{ paddingBottom: "2rem" }}>
                        {mapFormInputFields(field)}
                    </div>
                )
            })}

        </Container>
    )
}