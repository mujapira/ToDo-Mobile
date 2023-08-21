import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: start;
    gap: 16px;
`;

export const BoldSpan = styled.Text`
    font-size: ${props => props.theme.FONT_SIZE.SM};
    color: ${props => props.theme.COLORS.GRAY_300};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`

export const Span = styled.Text`
    font-size: ${props => props.theme.FONT_SIZE.SM};
    color: ${props => props.theme.COLORS.GRAY_300};
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`