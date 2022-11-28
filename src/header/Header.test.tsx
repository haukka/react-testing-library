import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Header from './Header';

afterEach(cleanup);

describe('testing Header Component', () => {
    it('test render', () => {
        const { asFragment } = render(<Header text={'test'} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('inserts text in h1', () => {
        render(<Header text={'test'} />)
        expect(screen.getByTestId('tag')).toHaveTextContent('test');
        expect(screen.getByText('test')).toHaveClass('fancy-h1');
    });
});