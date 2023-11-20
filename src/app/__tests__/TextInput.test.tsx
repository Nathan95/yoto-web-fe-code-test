import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import TextInput from '../components/TextInput';

const mock = {
  placholder: 'text',
  onChange: () => console.log('hello'),
  value: 'value',
};

describe('InputField', () => {
  const props = mock;
  it('renders the component', () => {
    expect(
      <TextInput
        placeholder="text"
        onChange={() => console.log('hello')}
        value=""
      />,
    ).toMatchSnapshot();
  });
});
