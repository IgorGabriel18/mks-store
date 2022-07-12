import { X, Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../ui/theme";
import { Container, Counter, CloseButton } from "./styles";

interface ICartItemProps {
    name: string;
    photo: string;
    price: number;
}

export function CartItem(props: ICartItemProps) {
    const [count, setCount] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CloseButton>
                    <X className="icon" />
                </CloseButton>
                <figure>
                    <img src={props.photo} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>
                <Counter>
                    <button type="button" onClick={() => setCount(count - 1)}>
                        <Minus className="icon" />
                    </button>
                    <span>{count}</span>
                    <button type="button" onClick={() => setCount(count + 1)}>
                        <Plus className="icon" />
                    </button>
                </Counter>
                <span className="price">R${props.price}</span>
            </Container>
        </ThemeProvider>
    );
}
