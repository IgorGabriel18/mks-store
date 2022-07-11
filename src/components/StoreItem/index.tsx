import { Bag } from "phosphor-react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../ui/theme";
import { Container, Item, BuyButton } from "./styles";
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
                <Item>
                    <figure>
                        <img src={props.photo} alt={props.name} />

                        <figcaption>
                            <h1>{props.name}</h1>
                            <span>R${props.price}</span>
                        </figcaption>
                    </figure>
                    <p>{props.description}</p>
                </Item>
                <BuyButton type="button">
                    <Bag className="icon" />
                    <span>COMPRAR</span>
                </BuyButton>
            </Container>
        </ThemeProvider>
    );
}
