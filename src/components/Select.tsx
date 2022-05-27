interface SelectProps {
  selectedElement: string;
  setSelectedElement: React.Dispatch<React.SetStateAction<string>>;
  elements: string[];
  name: string;
}

const Select: React.FC<SelectProps> = ({ elements, selectedElement, setSelectedElement, name }) => {
  return (
    <div className='select'>
      <select
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
