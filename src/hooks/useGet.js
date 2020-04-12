import React from 'react';
import axios from 'axios';

import {UserContext} from '../contexts/UserContext';
import {BASE_URL} from '../config';

export function useGet(endpoint, initialValue = []) {
  const {token} = React.useContext(UserContext);
  const [data, setData] = React.useState(initialValue);
  React.useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => {
        setData(data);
      });
  }, [token, endpoint]);
  return data;
}
