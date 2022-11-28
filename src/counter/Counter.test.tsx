import React from "react";
import { screen, render, cleanup, fireEvent, waitFor, getByText } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);

describe('testing Counter Component', () => {
    it('test render', () => {
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('test the presence of the counter', () => {
        render(<Counter />);
        expect(screen.getByTestId('count')).toHaveTextContent('0');
    });   
    
    it('test the click event for the increment part', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Increment'));
        expect(screen.getByTestId('count')).toHaveTextContent('1');
    });

    it('test the click event for the decrement part', async () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Decrement'));
        const count = await waitFor(() => screen.findByText('-1'));
        expect(count).toHaveTextContent('-1');
    });
});