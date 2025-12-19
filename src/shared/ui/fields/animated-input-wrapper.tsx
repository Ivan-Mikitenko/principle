/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import type { ReactNode } from "react";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.98);
  }
  60% {
    opacity: 1;
    transform: translateY(0px) scale(1.01);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
`;

type Props = {
    children: ReactNode;
};

export const AnimatedInputWrapper = ({ children }: Props) => (
    <div
        css={{
            animation: `${slideIn} 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
    >
        {children}
    </div>
);
