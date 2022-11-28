import React from 'react';
import { inject, observer } from "mobx-react";

const CounterStoreComponent = ({ CounterStore }: any) => {
    return (
        <div>
            <button onClick={CounterStore.increment}>+</button>
            <span data-testid="count">{CounterStore.count}</span>
            <button onClick={CounterStore.decrement}>-</button>
        </div>
    );
};

export default inject("CounterStore")(observer(CounterStoreComponent));