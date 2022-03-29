import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('Test Suite GifGridItem', () => { 
    
    // let wrapper;

    // beforeEach( () => {
    //     wrapper = shallow(<GifGridItem />)
    // })

    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Debe mostrar el componente correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot();

     });

    test('Debe de tener un párrafo con el title', () => { 
         
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('Debe de tener la imagen igual al url y alt de los props', () => { 
        
        const img = wrapper.find('img');
        const urlImg = img.prop('src');
        const altImg = img.prop('alt');

        expect(urlImg).toBe(url);
        expect(altImg).toBe(title);

    });

    test('Debe de tener animate_fadeIn', () => { 
        
        const div = wrapper.find('div');
        const animation = 'animate__backInLeft';

        expect(div.prop('className')).toContain(animation);

    })

 })