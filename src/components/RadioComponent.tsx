import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

interface IRadioProps {
    key: number;
    value?: string;
    name: string;
    label: string;
    description: string;
    options: string[];
    //handleChange(val: any): void;
}

export default function RadioComponent(props: IRadioProps) {
    return (
        <React.Fragment>
            <FormLabel component="legend">{props.label}</FormLabel>
            <RadioGroup key={props.key} name={props.name} value={props.value}>
                {
                    props.options.map((option) => {
                        return (<FormControlLabel value={option} control={<Radio />} label={option} />)
                    })
                }
            </RadioGroup>
        </React.Fragment>
    )
}