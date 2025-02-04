import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Cielo';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se cargan las imágenes desde useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Cielo',
                url: 'https://localhost/cielo.jpg'
            },
            {
                id: 'ABC',
                title: 'Sol',
                url: 'https://localhost/sol.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});

