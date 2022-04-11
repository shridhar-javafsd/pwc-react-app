import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import UserData from './components/UserData';
import store from './redux/store';

beforeAll(() => {
    console.log('beforeAll');
});

afterAll(() => {
    console.log('afterAll');
});

beforeEach(() => {
    console.log('beforeEach');
});

afterEach(() => {
    console.log('afterEach');
});

test('renders Add a New App User', () => {
    render(
        <Provider store={store}>
            <UserData />
        </Provider>
    );
    const txt = screen.getByText('Add a New App User');
    expect(txt).toBeInTheDocument();
});

test('renders User Data Component', () => {
    render(
        <Provider store={store}>
            <UserData />
        </Provider>
    );
    const txt = screen.getByText('User Data Component');
    expect(txt).toBeInTheDocument();
});

