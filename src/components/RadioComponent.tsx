import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import ToolTipComponent from "./ToolTipComponent";

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
            <ToolTipComponent
                toolTipText={props.description}
                renderChild={
                    <FormControl>
                        <FormLabel component="legend">{props.label}</FormLabel>
                        <RadioGroup name={props.name} value={props.value ? props.value : ""} onChange={props.handleChange}>
                            {
                                props.options.map((option, index) => {
                                    return <FormControlLabel key={`radio-option-${index}`} value={option} control={<Radio />} label={option} />
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                }
            />
        </React.Fragment>
    )
}