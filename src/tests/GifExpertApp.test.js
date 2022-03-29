import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';



describe('Suite GifExpertApp', () => {
    
    test('Debe mostrar el snapshot', () => {
        
        const wrapper = shallow( <GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar una lista de categorias', () => {
        
        const categories = ['One punch', 'Berserk'];

        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });

})