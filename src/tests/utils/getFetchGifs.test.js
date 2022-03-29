import { apiRequest } from "../../utils/getFetchGifs"

describe('Suite tests de getFetchGifs', () => { 
    

    test('Debe de traer 15 elementos', async() => { 
        
        const gifs = await apiRequest('Berserk');

        expect(gifs.length).toBe(15);

     });

     test('Debe mandar 0 elementos con el metodo con argumento vacio', async() => { 
        
        const gifs = await apiRequest('');

        expect(gifs.length).toBe(0);

     });

 })