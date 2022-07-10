import styled from "styled-components";

export const Navbar = styled.header`
    width: 100%;
    height: auto;
    padding: 0.5rem 1rem;
    display: grid;
    grid: 100% / repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color_palette.brand};
`;

export const Sidebar = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    width: 20.5rem;
    height: 100vh;
    min-height: max-content;
    padding: 2rem 1rem;
    background-color: ${({ theme }) => theme.color_palette.brand};
    box-shadow: ${({ theme }) => theme.color_palette.base.secondary} 0 0.5rem 1.5rem;
`;

export const ShoppingCartButton = styled.button`
    width: max-content;
    height: max-content;
    padding: 0.5rem 0.75rem;
    display: grid;
    grid: 100% / repeat(2, auto);
    justify-content: center;
    align-items: center;
    column-gap: 0.75rem;
    background-color: ${({ theme }) => theme.color_palette.base.primary};
    border-radius: ${({ theme }) => theme.shape.border.radius.main};

    .icon {
        font-size: ${({ theme }) => theme.shape.icon.small};
        color: ${({ theme }) => theme.color_palette.text.primary};
    }

    span {
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        font-size: ${({ theme }) => theme.typography.size.subtitle};
        font-family: ${({ theme }) => theme.typography.family};
        color: ${({ theme }) => theme.color_palette.text.primary};
    }
`;

export const List = styled.ul`
    width: 100%;
    height: auto;
    padding: 2rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

export const Footer = styled.footer`
    width: 100%;
    height: auto;
    padding: 0.5rem 1rem;
    display: grid;
    grid: 100% / 100%;
    place-items: center;
    background-color: ${({ theme }) => theme.color_palette.variant.secondary};

    span {
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        font-size: ${({ theme }) => theme.typography.size.text};
        font-family: ${({ theme }) => theme.typography.family};
        color: ${({ theme }) => theme.color_palette.text.primary};
    }
`;
