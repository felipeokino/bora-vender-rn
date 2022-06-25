import styled from 'styled-components/native';

export const CartCellContainer = styled.View`
  padding: 2px 8px;
  flex-direction: row;
  background-color: #fff;
  border-width: 1px;
  border-color: #ccc;
  width: 100%;
  justify-content: space-between;
`
export const DescContainer = styled.View`
  margin-left: 10px;
  flex-grow: 1;
  justify-content: center;
`

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const RightContainer = styled.View`
  flex-direction: row;
  margin-right: 0;
  align-items: center;
  width: auto;
`
export const RemoveItemButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #f00;
  border-radius: 10px;
  background-color: #f97a7a;
  padding: 15px 10px;
`
