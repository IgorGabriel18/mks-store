import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import logoImg from "../../assets/logo.svg";
import { theme } from "../../ui/theme";
import { Container, Box } from "./styles";

interface INavbarProps {
    children: ReactNode;
}

export function Navbar(props: INavbarProps) {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box>
                    <img src={logoImg} alt="Logo" />

                    {props.children}
                </Box>
            </Container>
        </ThemeProvider>
    );
}
