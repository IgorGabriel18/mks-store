import styled from "styled-components";

export const Container = styled.div`
    width: 15.75rem;
    height: 20.5rem;
    padding: ${({ theme }) => theme.shape.spacing.big} 0 0 0;
    display: grid;
    grid: repeat(2, auto) / 100%;
    row-gap: ${({ theme }) => theme.shape.spacing.small};
    align-content: space-between;
    border-radius: ${({ theme }) => theme.shape.border.radius.main};
    box-shadow: ${({ theme }) => theme.color_palette.base.secondary} 0 0.5rem 1.5rem;
`;

export const Box = styled.div`
    width: 100%;
    height: auto;
    padding: 0 ${({ theme }) => theme.shape.spacing.big};
    display: grid;
    grid: repeat(3, auto) / 100%;
    row-gap: ${({ theme }) => theme.shape.spacing.small};

    img {
        width: 7rem;
        height: 8.5rem;
        margin: auto;
    }

    div {
        width: 100%;
        height: auto;
        display: grid;
        grid: 100% / repeat(2, auto);
        justify-content: space-between;
        column-gap: ${({ theme }) => theme.shape.spacing.small};

        h3 {
            font: ${({ theme }) => theme.typography.title};
            color: ${({ theme }) => theme.color_palette.base.secondary};
            text-align: justify;
        }

        span {
            width: max-content;
            height: max-content;
            padding: 0.25rem 1rem;
            background-color: ${({ theme }) => theme.color_palette.base.secondary};
            border-radius: ${({ theme }) => theme.shape.border.radius.main};
            font: ${({ theme }) => theme.typography.subtitle};
            color: ${({ theme }) => theme.color_palette.base.primary};
        }
    }

    p {
        font: ${({ theme }) => theme.typography.text};
        color: ${({ theme }) => theme.color_palette.base.secondary};
        text-align: justify;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: max-content;
    padding: 0.75rem 0;
    display: grid;
    grid: 100% / repeat(2, auto);
    justify-content: center;
    align-items: center;
    column-gap: ${({ theme }) => theme.shape.spacing.big};
    background-color: ${({ theme }) => theme.color_palette.brand};
    border-radius: 0 0 ${({ theme }) => theme.shape.border.radius.main} ${({ theme }) => theme.shape.border.radius.main};

    .icon {
        font-size: ${({ theme }) => theme.shape.icon.main};
        color: ${({ theme }) => theme.color_palette.base.primary};
    }

    span {
        font: ${({ theme }) => theme.typography.button};
        color: ${({ theme }) => theme.color_palette.base.primary};
    }
`;
