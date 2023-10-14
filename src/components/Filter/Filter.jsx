import {Div, Input} from './Filter.styled'

const Filter = ({ value, onChange }) => {
  return (
    <Div>
      <h2>Contacts</h2>
      <Input
        type="text"
        placeholder="Find contact"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Div>
  );
};
export default Filter;