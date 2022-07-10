import { Bag } from "phosphor-react";
import { ThemeProvider } from "styled-components";

import itemImg from "../../assets/item.png";
import { theme } from "../../ui/theme";
import { Container, Item, BuyButton } from "./styles";

export function StoreItemCard() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Item>
                    <figure>
                        <img src={itemImg} alt="Produto" />

                        <figcaption>
                            <h1>Apple Watch Series 4 GPS</h1>
                            <span>R$399</span>
                        </figcaption>
                    </figure>
                    <p>Redesigned from scratch and completely revised.</p>
                </Item>
                <BuyButton type="button">
                    <Bag className="icon" />
                    <span>COMPRAR</span>
                </BuyButton>
            </Container>
        </ThemeProvider>
    );
}
