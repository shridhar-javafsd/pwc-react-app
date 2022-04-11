import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import UserData from './components/UserData';
import store from './redux/store';

// guide - https://jestjs.io/docs/getting-started 
// guide - https://www.npmjs.com/package/@testing-library/jest-dom 
// install -  npm i -D --exact jest-watch-typeahead@0.6.5


test('renders Add a New App User', () => {
    render(
        <Provider store={store}>
            <UserData />
        </Provider>
    );
    const txt = screen.getByText('Add a New App User');
    expect(txt).toBeInTheDocument();
});

