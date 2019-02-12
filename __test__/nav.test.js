import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Nav from '../src/components/Nav';

const mockLinks = [
	{
		"name": "About", 
		"href": "#about"
	},
	{
		"name": "Skills", 
		"href": "#skills"
	},
	{
		"name": "Experience", 
		"href": "#experience"
	} 
];
const nav = <Nav links={mockLinks} currentSection="about" />
const wrapper = mount(nav);

describe('<Nav />', () => {

	it('should match snapshot', () => {
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('should render 3 links', () => {
		expect(wrapper.find('a').length).toBe(3);
	});

	it('"about link should have "active" class when current section is set to "about""', () => {
		const firstLink = wrapper.find('a').first();

		expect(firstLink.hasClass('active')).toBe(true);
	})

});
