import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: ${({ theme }) => theme.shape.spacing.small} ${({ theme }) => theme.shape.spacing.big};
    display: grid;
    grid: 100% / repeat(3, auto);
    align-items: center;
    column-gap: ${({ theme }) => theme.shape.spacing.medium};
    background-color: ${({ theme }) => theme.color_palette.base.primary};
    border-radius: ${({ theme }) => theme.shape.border.radius.main};

    figure {
        img {
            width: 3rem;
            height: 3rem;
        }

        figcaption {
            font: ${({ theme }) => theme.typography.legend};
            color: ${({ theme }) => theme.color_palette.base.secondary};
        }
    }

    .price {
        width: max-content;
        height: max-content;
        font: ${({ theme }) => theme.typography.subtitle};
        color: ${({ theme }) => theme.color_palette.base.secondary};
    }
`;

export const Counter = styled.div`
    width: max-content;
    height: max-content;
    display: grid;
    grid: auto / repeat(3, auto);
    justify-content: center;
    align-items: center;
    column-gap: ${({ theme }) => theme.shape.spacing.medium};
`;

export const CloseButton = styled.button`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    z-index: 5;
    width: max-content;
    height: max-content;
    padding: ${({ theme }) => theme.shape.spacing.small};
    display: grid;
    grid: 100% / 100%;
    place-items: center;
    background-color: ${({ theme }) => theme.color_palette.base.secondary};
    border-radius: ${({ theme }) => theme.shape.border.radius.circle};

    .icon {
        font-size: ${({ theme }) => theme.shape.icon.main};
        color: ${({ theme }) => theme.color_palette.base.primary};
    }
`;
