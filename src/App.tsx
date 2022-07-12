import { ShoppingCart, X } from "phosphor-react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { Navbar } from "./components/Navbar";
import { getProducts } from "./data/services";
import Global from "./ui/global";
import { StoreItem } from "./components/StoreItem";
import { List, ShoppCart } from "./ui/styles";
import { theme } from "./ui/theme";

interface IApiResponseProps {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
}

export default function App() {
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
                <button className="btn" type="button" onClick={() => setToggle(true)}>
                    <ShoppingCart className="icon" />
                    <span>0</span>
                </button>
            </Navbar>

            <main>
                <List>
                    {store.map((item) => {
                        return (
                            <li key={item.id}>
                                <StoreItem
                                    name={item.name}
                                    description={item.description}
                                    photo={item.photo}
                                    price={item.price}
                                />
                            </li>
                        );
                    })}
                </List>

                {toggle && (
                    <ShoppCart>
                        <header>
                            <h2>Carrinho de compras</h2>
                            <button type="button" onClick={() => setToggle(false)}>
                                <X className="icon" />
                            </button>
                        </header>
                        <ul></ul>
                        <footer>
                            <div>
                                <h3>Total:</h3>
                                <span>R$</span>
                            </div>
                            <button type="button" onClick={() => setToggle(false)}>
                                Finalizar Compra
                            </button>
                        </footer>
                    </ShoppCart>
                )}
            </main>
        </ThemeProvider>
    );
}
