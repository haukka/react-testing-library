import React from 'react';

interface IHeader {
    text: string
}

const Header = ({ text }: IHeader) => {
    return (
        <header>
            <h1 data-testid="tag" className="fancy-h1">
                {text}
            </h1>
        </header>
    );
};

export default Header;