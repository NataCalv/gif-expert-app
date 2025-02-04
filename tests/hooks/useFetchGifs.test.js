describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        const {result} = renderHook( () => useFetchGifs('Cielo'));
        const {images, isLoading} = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de regresar un arreglo de imagenes y isLoading en false', async() => {

        const {result} = renderHook( () => useFetchGifs('Cielo'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            
        );

        const {images, isLoading} = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});