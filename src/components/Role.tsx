import ButtonStyles from './styles/ButtonStyles';

interface RoleButtonProps {
  text: string;
  onClick: any;
}
const Role: React.FC<RoleButtonProps> = ({ text, onClick }) => {
  return (
    <ButtonStyles type='button' className='delete-button' onClick={onClick}>
      {text} X
    </ButtonStyles>
  );
};

export default Role;
