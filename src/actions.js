export const fetchHistoryRequest = () => ({
  type: 'FETCH_HISTORY_REQUEST',
});

export const fetchHistorySuccess = (history, currentPage, totalPages) => ({
  type: 'FETCH_HISTORY_SUCCESS',
  payload: history,
});

export const fetchHistoryError = (error) => ({
  type: 'FETCH_HISTORY_ERROR',
  payload: error,
});

export const fetchHistory = () => {
  return async (dispatch) => {
    dispatch(fetchHistoryRequest());
    try {
      const response = await fetch(`https://api.spacexdata.com/v3/history`);
      const data = await response.json();
      dispatch(fetchHistorySuccess(data));
    } catch (error) {
      dispatch(fetchHistoryError(error));
    }
  };
};

export const fetchPayloadsRequest = () => ({
  type: 'FETCH_PAYLOADS_REQUEST',
});

export const fetchPayloadsSuccess = (payloads) => ({
  type: 'FETCH_PAYLOADS_SUCCESS',
  payload: payloads,
});

export const fetchPayloadsError = (error) => ({
  type: 'FETCH_PAYLOADS_ERROR',
  payload: error,
});

export const fetchPayloads = () => {
  return async (dispatch) => {
    dispatch(fetchPayloadsRequest());
    try {
      const response = await fetch(`https://api.spacexdata.com/v3/payloads`);
      const data = await response.json();
      dispatch(fetchPayloadsSuccess(data));
    } catch (error) {
      dispatch(fetchPayloadsError(error));
    }
  };
};
