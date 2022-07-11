import styled from "styled-components";

export const Container = styled.div`
    width: 16rem;
    height: 21rem;
    display: grid;
    grid: repeat(2, auto) / 100%;
    align-content: space-between;
    row-gap: 0.5rem;
    border-radius: ${({ theme }) => theme.shape.border.radius.main};
    box-shadow: ${({ theme }) => theme.color_palette.base.secondary} 0 0.5rem 1.5rem;
`;

export const Item = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem 0.75rem 0 0.75rem;
    display: grid;
    grid: repeat(2, auto) / 100%;
    row-gap: 0.5rem;

    figure {
        width: 100%;
        height: auto;
        display: grid;
        grid: repeat(2, auto) / 100%;
        justify-items: center;
        row-gap: 0.5rem;

        img {
            width: 7rem;
            height: 8.5rem;
        }

        figcaption {
            width: 100%;
            height: auto;
            display: grid;
            grid: 100% / repeat(2, auto);
            align-items: center;
            column-gap: 0.75rem;

            h1 {
                font-weight: ${({ theme }) => theme.typography.weight.regular};
                font-size: ${({ theme }) => theme.typography.size.title};
                font-family: ${({ theme }) => theme.typography.family};
                color: ${({ theme }) => theme.color_palette.text.primary};
            }

            span {
                width: max-content;
                height: max-content;
                padding: 0.5rem;
                background-color: ${({ theme }) => theme.color_palette.base.secondary};
                border-radius: ${({ theme }) => theme.shape.border.radius.main};
                font-weight: ${({ theme }) => theme.typography.weight.bold};
                font-size: ${({ theme }) => theme.typography.size.subtitle};
                font-family: ${({ theme }) => theme.typography.family};
                color: ${({ theme }) => theme.color_palette.text.secondary};
            }
        }
    }

    p {
        width: 100%;
        height: auto;
        font-weight: ${({ theme }) => theme.typography.weight.light};
        font-size: ${({ theme }) => theme.typography.size.text};
        font-family: ${({ theme }) => theme.typography.family};
        color: ${({ theme }) => theme.color_palette.text.primary};
    }
`;

export const BuyButton = styled.button`
    width: 100%;
    height: 2.25rem;
    padding: 0.25rem 0;
    display: grid;
    grid: 100% / repeat(2, auto);
    justify-content: center;
    align-items: center;
    column-gap: 0.75rem;
    background-color: ${({ theme }) => theme.color_palette.brand};
    border-radius: 0 0 ${({ theme }) => theme.shape.border.radius.main} ${({ theme }) => theme.shape.border.radius.main};

    .icon {
        font-size: ${({ theme }) => theme.shape.icon.medium};
        color: ${({ theme }) => theme.color_palette.text.secondary};
    }

    span {
        font-weight: ${({ theme }) => theme.typography.weight.semi_bold};
        font-size: ${({ theme }) => theme.typography.size.title};
        font-family: ${({ theme }) => theme.typography.family};
        color: ${({ theme }) => theme.color_palette.text.secondary};
    }
`;
