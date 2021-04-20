import { TextField } from "@material-ui/core";
import React from "react";

interface ITextFieldProps {
    value?: string;
    name: string;
    label: string;
    description: string;
}

export default function TextFieldComponent(props: ITextFieldProps) {
    return (
        <React.Fragment>
            <TextField
                fullWidth
                label={props.label}
                value={props.value}
                placeholder={props.description}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </React.Fragment>
    )
}