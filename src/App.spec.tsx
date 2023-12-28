import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('should render  list items', () => {
        const { getByText } = render(<App />);
        expect(getByText('typescript')).toBeInTheDocument();
        expect(getByText('java')).toBeInTheDocument();
        expect(getByText('python')).toBeInTheDocument();
    })
})