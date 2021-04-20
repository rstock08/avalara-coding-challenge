import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import React from "react";

interface ISelectProps {
    key: number;
    value?: string;
    name: string;
    label: string;
    description: string;
    options: string[];
    //handleChange(val: any): void;
}

export default function SelectComponent(props: ISelectProps) {
    return (
        <React.Fragment>
            <FormControl>
                <InputLabel shrink>
                    {props.label}
                </InputLabel>
                <Select
                    defaultValue=""
                >
                    <MenuItem key={"menu-item-empty"} value="None">
                        <em>None</em>
                    </MenuItem>
                    {props.options.length > 0 ? (
                        props.options.map((option: string, index: number) => {
                            return (
                                <MenuItem key={`menu-item-${index}`} value={option}>
                                    {option}
                                </MenuItem>
                            )
                        })
                    ) : (null)}
                </Select>
                <FormHelperText>{props.description}</FormHelperText>
            </FormControl>
        </React.Fragment>
    )
}