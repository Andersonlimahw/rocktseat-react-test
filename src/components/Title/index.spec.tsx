import { render } from '@testing-library/react';
import { Title } from './index';

describe('Title component', () => {
    it('shoul match snapshot with optional props', () => {
        const { asFragment } = render(<Title />);        
        expect(asFragment).toMatchSnapshot();        
    });
    it('shoul match snapshot with text prop', () => {
        const { asFragment } = render(<Title text='Testes' />);        
        expect(asFragment).toMatchSnapshot();        
    });

    it('shoul render with optional props', () => {
        const { getByText, debug } = render(<Title />);
        expect(getByText('Unit tests')).toBeInTheDocument();
    });
    it('shoul render with optional props', () => {
        const { getByText, debug } = render(<Title text='Tests text'  />);
        expect(getByText('Tests text')).toBeInTheDocument();
    });
});