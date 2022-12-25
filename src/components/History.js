import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import useStyles from './styles';
import { fetchHistory } from '../actions';

const History = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useSelector((state) => state.history);
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredHistory = history.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rows = filteredHistory;
  const totalRows = rows.length;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchHistory());
  }, []);

  return (
    <>
      <TextField
        sx={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}
        label="Search"
        value={search}
        onChange={handleChange}
        className={classes.searchInput}
      />
      <div className=" ml-2 mr-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">
                ID
              </th>
              <th className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">
                Name
              </th>
              <th className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="w-11/12 ">
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  className="odd:bg-gray-100 hover:!bg-stone-200"
                  key={row.id}
                >
                  <td>{row.title}</td>
                  <td>{new Date(row.event_date_utc).toLocaleString()}</td>
                  <td>{row.details}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="mt-2">
          <label>
            Rows per page:
            <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </label>
        </div>
        <div className="flex-md">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <span>{page + 1}</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setPage(page + 1)}
            disabled={page >= totalRows / rowsPerPage - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default History;
