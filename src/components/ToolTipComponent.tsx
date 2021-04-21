import { Tooltip } from "@material-ui/core";
import React, { ReactFragment } from "react";

interface IToolTipProps {
    toolTipText: string;
    renderChild: ReactFragment;
}

export default function ToolTipComponent(props: IToolTipProps) {
    return (
        <Tooltip
            title={props.toolTipText}
            placement="right"
            arrow
            enterDelay={500}
            leaveDelay={200}
            style={{ paddingBottom: "2rem" }}
        >
            <span>
                {props.renderChild}
            </span>
        </Tooltip>

    )
}
