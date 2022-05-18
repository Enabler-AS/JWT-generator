interface SelectProps {
  selectedElement: string;
  setSelectedElement: React.Dispatch<React.SetStateAction<string>>;
  elements: string[];
  roles?: string[];
  name: string;
}

const Select: React.FC<SelectProps> = ({
  elements,
  selectedElement,
  setSelectedElement,
  roles,
  name,
}) => {
  return (
    <div className='select'>
      <select
        required={roles?.length === 0 ? true : false}
        value={selectedElement}
        name={name}
        onChange={e => {
          setSelectedElement(e.target.value);
        }}>
        {elements.map((table, index) => {
          return (
            <option key={index} value={table}>
              {table === '' ? 'Please select' : table}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
