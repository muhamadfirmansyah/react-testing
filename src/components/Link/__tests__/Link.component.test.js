import renderer from 'react-test-renderer'
import Link from '../Link.component'

test('Link changes the class when hovered', () => {

	const { act } = renderer

	const component = renderer.create(
		<Link page="https://www.facebook.com">Facebook</Link>)

	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()

	act(() => {

		// manually trigger the callback
		tree.props.onMouseEnter()
		// re-rendering
		tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})

	act(() => {
		// manually trigger the callback
		tree.props.onMouseLeave()
		// re-rendering
		tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
