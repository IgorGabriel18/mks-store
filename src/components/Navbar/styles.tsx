import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: auto;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.color_palette.brand};
`;

export const Box = styled.div`
    width: min(100%, 75rem);
    height: auto;
    margin: 0 auto;
    display: grid;
    grid: 100% / repeat(2, auto);
    justify-content: space-between;
    align-items: center;

    .btn {
        width: max-content;
        height: max-content;
        padding: 0.5rem 1.25rem;
        display: grid;
        grid: 100% / repeat(2, auto);
        column-gap: ${({ theme }) => theme.shape.spacing.small};
        background-color: ${({ theme }) => theme.color_palette.base.primary};
        border-radius: ${({ theme }) => theme.shape.border.radius.main};

        .icon {
            font-size: ${({ theme }) => theme.shape.icon.main};
            color: ${({ theme }) => theme.color_palette.base.secondary};
        }

        span {
            font: ${({ theme }) => theme.typography.variant.navbar};
            color: ${({ theme }) => theme.color_palette.base.secondary};
        }
    }
`;
