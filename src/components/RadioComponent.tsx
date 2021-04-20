import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

interface IRadioProps {
    value?: string;
    name: string;
    label: string;
    description: string;
    options: string[];
    uniqueKey: number;
    handleChange(val: any): void;
}

export default function RadioComponent(props: IRadioProps) {

    return (
        <React.Fragment key={`radio-group-${props.uniqueKey}`}>
            <FormLabel component="legend">{props.label}</FormLabel>
            <RadioGroup name={props.name} value={props.value ? props.value : ""} onChange={props.handleChange}>
                {
                    props.options.map((option, index) => {
                        return <FormControlLabel key={`radio-${index}`} value={option} control={<Radio />} label={option} />
                    })
                }
            </RadioGroup>
        </React.Fragment>
    )
}