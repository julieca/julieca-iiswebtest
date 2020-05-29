import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as enums from "../enums";
import { getTableData } from '../actions';
import {
  Grid, Paper, Table, TableBody,
  TableContainer, TableHead, TableRow,
  Snackbar, Button, Typography, Grow
} from '@material-ui/core';
import { Assignment, Delete } from '@material-ui/icons';
import "../assets/css/Home.css";
import TableData from "../component/TableData";
import LineChart from "../chart/Line Chart";
import BarChart from "../chart/Bar Chart";


function App(props) {
  const [selectTable, setSelectTable] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    props.getTableData();
  }, []);

  async function openToast() {
    await setOpen(false);
    await setOpen(true);
  }

  const closeToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function clickCheck(name) {
    let find = selectTable.find(p => p === name);
    let newSelect = selectTable;
    if (find) {
      var index = newSelect.indexOf(find);
      if (index !== -1) newSelect.splice(index, 1);
    } else {
      newSelect.push(name);
    }
    setSelectTable(newSelect);
    openToast();
  }

  return (
    <div className="App" >
      <div className="App-header" style={{ margin: "20px" }} >
        <Grid container style={{ width: "100%" }}>
          <Grid item xs={12}>

            <Grow in={true} timeout={500}>
              <Typography variant="h4" align="left" >Charts and Table Visualization</Typography>
            </Grow>
            <div className="divider"></div>

          </Grid>

          <Grid item xs={12} >

            {/* Chart */}
            <Grid container >
              <Grid item sm={12} md={6}>
                <BarChart />
              </Grid>
              <Grid item sm={12} md={6}>
                <LineChart />
              </Grid>
            </Grid>

            <div className="divider"></div>
          </Grid>
          <Grid item xs={12} >
            {/* Table */}
            <TableContainer component={Paper} >
              <Table aria-label="simple table">
                <TableHead>
                  <Grow in={true} timeout={500}>
                    <TableRow>
                      {Object.keys(enums.tableLabel).map((i) =>
                        <TableData i={i}
                          key={"header" + i + 1}
                          data={enums.tableLabel[i]}
                          row={enums.tableLabel[i]}
                        />
                      )}
                    </TableRow>
                  </Grow>

                </TableHead>

                <TableBody>

                  {props.data.tabledata && props.data.tabledata.map((p, i) =>
                    <Grow in={true} key={i} timeout={500}>
                      <TableRow >
                        {
                          Object.keys(enums.tableLabel).map(t =>
                            <TableData i={i}
                              key={"data" + enums.tableLabel[t] + i + 1}
                              data={p[t]}
                              row={enums.tableLabel[t]}
                              functionOpen={clickCheck}
                              checkItem={selectTable}
                            />
                          )
                        }
                      </TableRow>
                    </Grow>
                  )}

                </TableBody>

              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <Snackbar
          open={open}

          autoHideDuration={2000}
          onClose={closeToast}

          message={selectTable.length + " Table Selected"}

          action={
            <React.Fragment>
              <Button color="primary" size="small" onClick={closeToast}>
                X
            </Button>
              <Button color="primary" size="small" onClick={() => { }}>
                <Assignment />
                Assign Category
            </Button>
              <Button color="secondary" size="small" onClick={() => { }}>
                <Delete />
                Delete Category
            </Button>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ data }) => {
  return { data }
};
const mapDispatchToProps = dispatch => ({
  getTableData: () => dispatch(getTableData())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
