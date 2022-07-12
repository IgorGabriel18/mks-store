import styled from "styled-components";

export const List = styled.ul`
    width: min(100%, 75rem);
    height: auto;
    margin: 0 auto;
    padding: ${({ theme }) => theme.shape.spacing.big} 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.shape.spacing.big};
`;

export const ShoppCart = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    width: 18rem;
    height: 100vh;
    display: grid;
    grid: repeat(3, auto) / 100%;
    row-gap: ${({ theme }) => theme.shape.spacing.medium};
    align-content: space-between;
    background-color: ${({ theme }) => theme.color_palette.brand};
    box-shadow: ${({ theme }) => theme.color_palette.base.secondary} 0 0.5rem 1.5rem;

    header {
        width: 100%;
        height: auto;
        display: grid;
        padding: 1.75rem 1rem 0 1rem;
        grid: 100% / repeat(2, auto);
        justify-content: space-between;
        align-items: center;
        column-gap: ${({ theme }) => theme.shape.spacing.small};

        h2 {
            font: ${({ theme }) => theme.typography.variant.shoppcart};
            color: ${({ theme }) => theme.color_palette.base.primary};
        }

        button {
            width: max-content;
            height: max-content;
            display: grid;
            grid: 100% / 100%;
            place-items: center;
            background-color: ${({ theme }) => theme.color_palette.base.secondary};
            border-radius: ${({ theme }) => theme.shape.border.radius.circle};

            .icon {
                font-size: ${({ theme }) => theme.shape.icon.shoppcart};
                color: ${({ theme }) => theme.color_palette.brand};
            }
        }
    }

    ul {
        width: 100%;
        height: 16rem;
        padding: 0 1rem;
        overflow: hidden;
    }

    footer {
        width: 100%;
        height: auto;
        display: grid;
        grid: repeat(2, auto) / 100%;
        row-gap: ${({ theme }) => theme.shape.spacing.small};

        div {
            width: 100%;
            height: auto;
            display: grid;
            padding: 0 1rem;
            grid: 100% / repeat(2, auto);
            justify-content: space-between;
            align-items: center;
            column-gap: ${({ theme }) => theme.shape.spacing.small};

            h3,
            span {
                font: ${({ theme }) => theme.typography.variant.shoppcart};
                color: ${({ theme }) => theme.color_palette.base.primary};
            }
        }

        button {
            width: 100%;
            height: 4rem;
            display: grid;
            grid: 100% / 100%;
            place-items: center;
            background-color: ${({ theme }) => theme.color_palette.base.secondary};
            font: ${({ theme }) => theme.typography.button};
            color: ${({ theme }) => theme.color_palette.base.primary};
        }
    }
`;
