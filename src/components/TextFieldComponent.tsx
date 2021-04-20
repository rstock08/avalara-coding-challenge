import { TextField } from "@material-ui/core";
import React from "react";

interface ITextFieldProps {
    value?: string;
    name: string;
    label: string;
    description: string;
    key: number;
}

export default function TextFieldComponent(props: ITextFieldProps) {
    return (
        <React.Fragment>
            <TextField
                key={props.key}
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