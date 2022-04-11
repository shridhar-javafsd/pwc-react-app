import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

// guide - https://jestjs.io/docs/getting-started 
// guide - https://www.npmjs.com/package/@testing-library/jest-dom 
// install -  npm i -D --exact jest-watch-typeahead@0.6.5

test('renders Sample test', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const txt = screen.getByText('Sample text');
  expect(txt).toBeInTheDocument();
});
test('renders Sample test ', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const txt = screen.getByText('Sample text');
  expect(txt).toBeInTheDocument();
});

// test('renders Sample test', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   expect('Some other sample text').not.toBeInTheDocument();
// });

// test('renders Sample test', () => {
//   render(<App />);
//   expect('Sample text').toBeInTheDocument();
// });


// test(arg1, arg2);

// test('arg1', () => { });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

