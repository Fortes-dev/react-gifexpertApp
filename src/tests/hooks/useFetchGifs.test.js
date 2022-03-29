import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Suite useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial (vacio)', async() => {
       
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Berserk'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Berserk'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 15 );
        expect( loading ).toBe( false );

    });

})