import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React from "react";
import ToolTipComponent from "./ToolTipComponent";

interface ISelectProps {
    value?: string;
    name: string;
    label: string;
    description: string;
    options: string[];
    uniqueKey: number;
    handleChange(val: any): void;
}

export default function SelectComponent(props: ISelectProps) {
    return (
        <React.Fragment key={`select-${props.uniqueKey}`}>
            <ToolTipComponent
                toolTipText={props.description}
                renderChild={
                    <FormControl style={{ width: "12rem" }}>
                        <InputLabel shrink>
                            {props.label}
                        </InputLabel>
                        <Select
                            name={props.name}
                            value={props.value ? props.value : ""}
                            onChange={props.handleChange}
                        >
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
                    </FormControl>
                }
            />
        </React.Fragment>
    )
}