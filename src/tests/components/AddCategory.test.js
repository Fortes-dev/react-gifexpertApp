import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";


describe('Test suite de AddCategory', () => { 
    

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach ( () => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrar el snapshop del componente', () => { 
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => { 
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        // Simulamos el evento que es un objeto. Dentro del evento tenemos el target
        // Un atributo de ese objeto, y ya en el target le pasamos el value (el texto)
        input.simulate('change', { target: {value} });

     });

    test('NO debe de postear la informacion con submit', () => { 
         
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe de llamar al setCategories y limpiar la caja de texto', () => { 
        
        const value = 'unodostres';
        const input = wrapper.find('input')

        input.simulate('change', { target: {value} });
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( input.prop('value') ).toMatch('');

    });

});
