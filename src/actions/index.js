import {
  GET_DATA
} from '../enums/mutations';

export const getTableData = () => {
  return async dispatch => {
    const data = [{
      name: "Table 01",
      category: "Category 01",
      avalaibility: "Avalaible",
      arrival: "Arrived"
    }, {
      name: "Table 02",
      category: "Category 01",
      avalaibility: "Full",
      arrival: "Hasn't Arrived"
    }, {
      name: "Table 03",
      category: "Category 01",
      avalaibility: "Avalaible",
      arrival: "Arrived"
    }, {
      name: "Table 04",
      category: "Category 01",
      avalaibility: "Full",
      arrival: "Arrived"
    },
    ];
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }
}