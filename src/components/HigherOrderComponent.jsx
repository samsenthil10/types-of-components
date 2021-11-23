import React, { memo } from "react";

const CustomLabel = ({ name }) => {
    return (
        <>
            {console.log("CustomLabel component render using memo")}
            <div>
                <label>
                    <b>{name}</b>
                </label>
            </div>
        </>
    );
};
export default memo(CustomLabel);