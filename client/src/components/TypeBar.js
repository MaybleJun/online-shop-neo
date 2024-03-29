import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import styled from 'styled-components';
import { Context } from "../index";

const ListGroup = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;
  background-color: ${({ active }) => active ? '#007bff' : 'transparent'};
  color: ${({ active }) => active ? '#fff' : '#000'};
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <ListGroup>
            {device.types.map(type =>
                <ListItem
                    key={type.id}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </ListItem>
            )}
        </ListGroup>
    );
});

export default TypeBar;