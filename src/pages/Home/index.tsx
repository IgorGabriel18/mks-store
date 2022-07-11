import { X } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import logoImg from "../../assets/logo.svg";
import { StoreItemCard } from "../../components/StoreItemCard";
import { getProducts } from "../../services";
import Global from "../../ui/global";
import { theme } from "../../ui/theme";
import { Navbar, Sidebar, ShoppingCartButton, List, Footer } from "./styles";
interface IApiResponseProps {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
}

export function Home() {
    const [toggle, setToggle] = useState(false);
    const [store, setStore] = useState<IApiResponseProps[]>([]);

    useEffect(() => {
        getProducts().then((data) => setStore(data));
        getProducts().then((data) => console.log(data));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Global />
            <Navbar>
                <img src={logoImg} alt="Logo" />

                <ShoppingCartButton type="button" onClick={() => setToggle(true)}>
                    <ShoppingCart className="icon" />
                    <span>0</span>
                </ShoppingCartButton>
            </Navbar>

            {toggle && (
                <Sidebar>
                    <div>
                        <h3>Carrinho de compras</h3>
                        <button type="button" onClick={() => setToggle(false)}>
                            <X className="icon" />
                        </button>
                    </div>
                </Sidebar>
            )}

            <List>
                {store.map((item) => {
                    return (
                        <li key={item.id}>
                            <StoreItemCard
                                name={item.name}
                                description={item.description}
                                photo={item.photo}
                                price={item.price}
                            />
                        </li>
                    );
                })}
            </List>

            <Footer>
                <h5>MKS Sistemas © Todos os direitos reservados</h5>
            </Footer>
        </ThemeProvider>
    );
}
