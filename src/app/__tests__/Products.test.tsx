import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import Products from '../components/Products';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';

import { data } from '../temp/data';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

//need to finish this
it('should show render data', () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        id: 2,
      },
    ],
  });
});
