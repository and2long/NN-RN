import renderer from 'react-test-renderer';
import PrizeHeader from '../../src/components/PrizeHeader';

it(`renders correctly`, () => {
  const tree = renderer.create(<PrizeHeader taskCount={0} point={0} />).toJSON();
  expect(tree).toMatchSnapshot();
})