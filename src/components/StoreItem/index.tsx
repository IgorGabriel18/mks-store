import { Bag } from "phosphor-react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../ui/theme";
import { Container, Box, Button } from "./styles";

interface IStoreItemProps {
    name: string;
    description: string;
    photo: string;
    price: number;
}

export function StoreItem(props: IStoreItemProps) {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box>
                    <img src={props.photo} alt={props.name} />
                    <div className="info">
                        <h3>{props.name}</h3>
                        <span>R${props.price}</span>
                    </div>
                    <p>{props.description}</p>
                </Box>

                <Button type="button">
                    <Bag className="icon" />
                    <span>COMPRAR</span>
                </Button>
            </Container>
        </ThemeProvider>
    );
}
