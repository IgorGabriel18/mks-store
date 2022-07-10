import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import Global, { PageContainer } from "./ui/global";
import { theme } from "./ui/theme";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Global />

                <PageContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </PageContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
}
