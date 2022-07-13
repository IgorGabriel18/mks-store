import { ShoppingCart, X } from "phosphor-react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { CartItem } from "./components/CartItem";
import { Navbar } from "./components/Navbar";
import { StoreItem } from "./components/StoreItem";
import api from "./data/services/api";
import Global from "./ui/global";
import { Menu, List, ShoppCart } from "./ui/styles";
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
    const [data, setData] = useState<IApiResponseProps[]>([]);
    const [search, setSearch] = useState("");
    const [nPage, setNPage] = useState("");

    useEffect(() => {
        function getProducts() {
            return api
                .get(`products?page=${nPage}&rows=5&sortBy=name&orderBy=ASC`)
                .then((res) => res.data.products)
                .then(setData);
        }

        getProducts();
    }, [nPage]);

    const filteredData = data.filter((data) => data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <ThemeProvider theme={theme}>
            <Global />
            <Navbar>
                <button className="btn" type="button" onClick={() => setToggle(true)}>
                    <ShoppingCart className="icon" />
                    <span>3</span>
                </button>
            </Navbar>

            <main>
                <Menu>
                    <div>
                        <input
                            type="text"
                            value={nPage}
                            onChange={(ev) => setNPage(ev.target.value)}
                            placeholder="N° da página"
                            className="filter"
                        />
                        <input
                            type="text"
                            value={search}
                            onChange={(ev) => setSearch(ev.target.value)}
                            placeholder="Pesquisar produto..."
                            className="filter"
                        />
                    </div>
                </Menu>
                <List>
                    {filteredData.map((item) => {
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
                        <ul>
                            {filteredData.slice(0, 3).map((item) => {
                                return (
                                    <li key={item.id}>
                                        <CartItem name={item.name} photo={item.photo} price={item.price} />
                                    </li>
                                );
                            })}
                        </ul>
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
