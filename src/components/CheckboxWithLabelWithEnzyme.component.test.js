import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CheckboxWithLabel from './CheckboxWithLabel.component'

Enzyme.configure({adapter: new Adapter()});

test('CheckboxWithLabel changes the text after click using enzyme', () => {
    // render a checkbox with label in the document
    const checkbox = shallow(<CheckboxWithLabel labelOn={"On"} labelOff={"Off"} />)

    expect(checkbox.text()).toEqual('Off')

    checkbox.find('input').simulate('change')
    expect(checkbox.text()).toEqual('On')
})
