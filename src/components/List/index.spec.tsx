import { render, waitFor, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './index';

describe('List component', () => {
    it('should match to snapshot', () => {
        const { asFragment } = render(<List initialItems={['Anderson', 'Anthony']} />);        
        expect(asFragment).toMatchSnapshot();        
    });
    it('should render list items', () => {
        const { getByText, debug } = render(<List initialItems={['Anderson', 'Anthony']} />);
        debug();
        expect(getByText('Anderson')).toBeInTheDocument();
        debug();
    });

    it('should be able to add new item to the list', async () => {
        const { 
            getByText, 
            debug, 
            getByTestId,
        } = render(<List initialItems={['Anderson', 'Anthony']} />);
        debug();
        const inputElement = getByTestId('input_new_item');
        const addButton = getByText('Adicionar');

        userEvent.type(inputElement, 'Novo');
        userEvent.click(addButton);

        await waitFor(() => {
            expect(getByText('Novo')).toBeInTheDocument();
        });
        debug();
    });

    it('should be able to add remove item from the list', async () => {
        const { 
            getAllByText, 
            debug, 
            queryByText, 
            queryAllByTitle
        } = render(<List initialItems={['Anderson']} />);
        debug();
        
        const removeButtons = queryAllByTitle('Remover');        
        userEvent.click(removeButtons[0]);

        await waitFor(() => {
            expect(queryByText('Anderson')).not.toBeInTheDocument();
        });
        debug();
    });
})