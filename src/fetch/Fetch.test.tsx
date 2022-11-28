import React from "react";
import { screen, render, cleanup, fireEvent, waitFor, getByText, act } from "@testing-library/react";
import Fetch from './Fetch';
import axiosMock from "axios";

afterEach(cleanup);

jest.mock('axios');

const mockedAxios = axiosMock as jest.Mocked<typeof axiosMock>;

describe('testing Counter Component', () => {

    it('fetches and display data', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { greeting: 'hello there' } });
        const url = '/greeting';

        render(<Fetch url={url} />);
        
        await waitFor(() => screen.findByTestId('resolved'));
        expect(mockedAxios.get).toHaveBeenCalledWith(url);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
});