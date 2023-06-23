import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve renderizar lista com dois comentários', () => {
       
        const {debug} = render(<PostComment />);
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Olha que bacana... BONITO.'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentario'))

        expect(screen.getByText('Olha que bacana... BONITO.')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Top...'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentario'))

        expect(screen.getByText('Top...')).toBeInTheDocument();
        
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
    })

});