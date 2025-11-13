import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginButton = styled(Button)(() => ({
    background: "linear-gradient(145deg, #444 0%, #2e2e2e 100%)",
    color: "#fff",
    letterSpacing: 0.5,
    textTransform: "none",
    borderRadius: 8,
    boxShadow: `
    inset 0 0.5px 0 rgba(255, 255, 255, 0.1),
    0 3px 5px rgba(0, 0, 0, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.25)
  `,
    transition: "all 0.25s ease-in-out",
    "&:hover": {
        background: "linear-gradient(145deg, #555 0%, #333 100%)",
        boxShadow: `
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 6px 10px rgba(0, 0, 0, 0.4),
      0 2px 4px rgba(0, 0, 0, 0.3)
    `,
        transform: "translateY(-2px)",
    },
    "&:active": {
        background: "linear-gradient(145deg, #333 0%, #444 100%)",
        boxShadow: `
      inset 0 2px 3px rgba(0, 0, 0, 0.5),
      0 1px 2px rgba(255, 255, 255, 0.05)
    `,
        transform: "translateY(0.3px)",
    },
}));
