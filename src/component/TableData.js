import React from 'react';

import {
  FormControl, Checkbox, TableCell, FormControlLabel
} from '@material-ui/core';

const TableData = props => {
  function usefunc(e) {
    props.functionOpen(e.target.name)
  }

  if (props.row === "Name") {
    if (props.data === "Name") {
      return (
        <TableCell >
          <FormControl>
            <FormControlLabel
              value={props.data}
              control={<Checkbox disabled />}
              label={props.data}
            />
          </FormControl>
        </TableCell>
      );
    }
    return (
      <TableCell>
        <FormControl>
          <FormControlLabel
            value={props.data}
            control={<Checkbox name={props.row + props.i} checked={props.checkItem.indexOf(props.row + props.i) > -1} onClick={(e) => usefunc(e)} />}
            label={props.data}
          />
        </FormControl>

      </TableCell>
    );
  } else {
    return (
      <TableCell >{props.data}</TableCell>
    );
  }
}

export default TableData;
