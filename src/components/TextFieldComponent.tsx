import { TextField, Tooltip } from "@material-ui/core";
import React from "react";
import ToolTipComponent from "./ToolTipComponent";

interface ITextFieldProps {
    value?: string;
    name: string;
    label: string;
    description: string;
    uniqueKey: number;
    handleChange(val: any): void;
}

export default function TextFieldComponent(props: ITextFieldProps) {
    return (
        <React.Fragment key={`text-field-${props.uniqueKey}`}>
            <ToolTipComponent
                toolTipText={props.description}
                renderChild={
                    <TextField
                        name={props.name}
                        onChange={props.handleChange}
                        fullWidth
                        label={props.label}
                        value={props.value ? props.value : ""}
                        placeholder={props.description}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                }
            />

        </React.Fragment>
    )
}