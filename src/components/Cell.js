import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

//! An optimization to re-render only cells, that has changed :>
export default React.memo(Cell);