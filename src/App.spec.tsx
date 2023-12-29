import { render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
    it('should render  list items', () => {
        const { getByText } = render(<App />);
        expect(getByText('typescript')).toBeInTheDocument();
        expect(getByText('java')).toBeInTheDocument();
        expect(getByText('python')).toBeInTheDocument();
    })

    it('should be able to add new item to the list', async () => {
        const user = userEvent.setup();
        const { getByText, getByPlaceholderText, findByText } = render(<App />);

        const addButton = getByText('Adicionar');
        const inputElement = getByPlaceholderText('Novo item');
        const newItem = 'javascript';

        await userEvent.type(inputElement, newItem);
        await user.click(addButton);

        expect(await findByText(newItem)).toBeInTheDocument();
    })

    it('should be able to remove item from the list', async () => {
        const user = userEvent.setup();
        const { queryByText, getAllByText } = render(<App />);

        const removerButtons = getAllByText('Remover');

        await user.click(removerButtons[0]);

        await waitForElementToBeRemoved(() => {
            return queryByText('typescript')
        });
    })
})