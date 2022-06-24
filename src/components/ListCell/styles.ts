import styled from 'styled-components/native';

// interface ICellContainer {
//     isEmpty: boolean;
// }

export const CellContainerEmpty = styled.View`
    border-radius:5px;
    margin: 8px;
    flex-basis:0;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #fff;
`
export const CellContainer = styled(CellContainerEmpty)``;

export const CellFooter = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

export const ItemTitle = styled.Text`
    margin: 10px 0;;
    font-size: 16px;
    text-align: left ;
    font-weight: bold;
    width: 100%;
`

export const PriceText = styled.Text`
    font-size: 18px;
    font-weight: bold;
`