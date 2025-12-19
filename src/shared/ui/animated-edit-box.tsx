/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
    editMode: boolean;
    children: ReactNode;
};

export const AnimatedEditBox = ({ editMode, children }: Props) => {
    return (
        <Box
            sx={{
                border: "2px dashed #aaa",
                borderRadius: 2,
                padding: 2,
                transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: editMode ? "scale(1.01)" : "scale(1)",
            }}
        >
            {children}
        </Box>
    );
};
