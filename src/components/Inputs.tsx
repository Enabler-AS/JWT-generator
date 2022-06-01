/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Role from './Role';
import Select from './Select';
import Input from './Input';
import Outputs from './Outputs';
import selectData from '../data/selectData.json';
import removeSecret from '../lib/removeSecret';
import jwtSignature from '../lib/jwtSignature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import FormStyles from './styles/FormStyles';
import ButtonStyles from './styles/ButtonStyles';

interface InputData {
  name: string;
  company: string;
  aud?: string;
}

const Inputs: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedSubRole, setSelectedSubRole] = useState<string>('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedExpiryDate, setSelectedExpiryDate] = useState<string>('1y');
  const [secretShown, setSecretShown] = useState<boolean>(false);
  const [addClaim, setAddClaim] = useState<boolean>(false);
  const [newClaims, setNewClaims] = useState<any>();
  const [newClaimName, setNewClaimName] = useState<string>('');
  const [generatedToken, setGeneratedToken] = useState<string>('');
  const [secret, setSecret] = useState<string>(`${window.location.hash.replace('#', '')}`);
  const [inputData, setInputData] = useState<InputData>({
    name: '',
    company: '',
  });

  useEffect(() => {
    removeSecret();
  }, []);

  const toggleSecretVisibility = () => {
    setSecretShown(secretShown ? false : true);
  };

  const clearRoleInputs = () => {
    setSelectedTable('');
    setSelectedRole('');
    setSelectedSubRole('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { roles: selectedRoles, ...inputData, ...newClaims };
    jwtSignature(data, setGeneratedToken, selectedExpiryDate, secret);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    const name = target.name;

    if (!value && name === 'aud') {
      let copyOfInput = { ...inputData };
      delete copyOfInput.aud;
      setInputData(copyOfInput);
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleAddNewClaimClick = (event: React.FormEvent) => {
    event.preventDefault();
    setAddClaim(true);
  };

  const handleNewClaimChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setNewClaims({ [newClaimName]: value });
    console.log(newClaims);
  };

  const handleAddRoleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const selectedNewRole = `${selectedTable}${selectedRole ? `_${selectedRole}` : ''}${
      selectedSubRole ? `_${selectedSubRole}` : ''
    }`;
    if (selectedNewRole !== '' && !selectedRoles?.find(r => r === selectedNewRole)) {
      const newRoles = [selectedNewRole, ...selectedRoles!];
      setSelectedRoles(newRoles);
    }

    clearRoleInputs();
  };

  return (
    <>
      <FormStyles onSubmit={handleSubmit}>
        <Input
          title='Name'
          id='name-input'
          placeholder='name'
          name='name'
          onChange={handleChange}
          value={inputData.name}
          required={true}
          autoComplete='off'
          autoFocus={true}
        />
        <Input
          title='Company'
          id='company-input'
          placeholder='company name'
          name='company'
          onChange={handleChange}
          value={inputData.company}
          required={true}
          autoComplete='off'
        />
        <label htmlFor='role-input'>Roles</label>
        <div className='role-input' id='role-input'>
          <Select
            name='role'
            selectedElement={selectedTable}
            setSelectedElement={setSelectedTable}
            elements={selectData.tables}
          />
          <Select
            name='role'
            selectedElement={selectedRole}
            setSelectedElement={setSelectedRole}
            elements={selectData.roles}
          />

          {selectData.subroles.find(s => s.role === selectedRole) && (
            <Select
              name='role'
              selectedElement={selectedSubRole}
              setSelectedElement={setSelectedSubRole}
              elements={selectData.subroles.filter(s => s.role === selectedRole)[0].roles}
            />
          )}
          <ButtonStyles className='add-button' onClick={handleAddRoleClick}>
            +
          </ButtonStyles>
        </div>

        <div className='roles'>
          {selectedRoles?.map((r, index) => (
            <Role
              key={index}
              text={r}
              onClick={() => {
                setSelectedRoles(selectedRoles?.filter(item => item !== r));
              }}
            />
          ))}
        </div>

        <label htmlFor='expiry-select'>Expiry Date </label>

        <div className='select'>
          <select
            name='exp-select'
            value={selectedExpiryDate}
            onChange={e => {
              setSelectedExpiryDate(e.target.value);
            }}>
            <option value='1y'>1 year</option>
            <option value='30d'>30 days</option>
          </select>
        </div>

        <Input
          title='Audience'
          id='aud-input'
          placeholder='aud'
          name='aud'
          onChange={handleChange}
          value={inputData.aud ?? ''}
          autoComplete='off'
        />

        <div className='secret-wrapper'>
          <Input
            title='Secret'
            id='secret-input'
            placeholder='secret'
            type={secretShown ? 'text' : 'password'}
            name='secret'
            onChange={e => setSecret(e.target.value)}
            value={secret}
            required={true}
            autoComplete='off'
          />
          <FontAwesomeIcon
            className='icon'
            icon={secretShown === false ? faEye : faEyeSlash}
            onClick={toggleSecretVisibility}
          />
        </div>

        {addClaim ? (
          <div className='newClaim'>
            <input
              placeholder='name'
              type='text'
              autoComplete='off'
              onChange={e => setNewClaimName(e.target.value)}
              value={newClaimName}
            />
            <input
              placeholder='value'
              type='text'
              autoComplete='off'
              name={newClaimName}
              onChange={handleNewClaimChange}
            />
          </div>
        ) : null}

        <div className='buttons-wrapper'>
          <ButtonStyles type='button' className='submit-button' onClick={handleAddNewClaimClick}>
            Add a new claim
          </ButtonStyles>
          <ButtonStyles type='submit' className='submit-button'>
            Create signature
          </ButtonStyles>
        </div>
      </FormStyles>

      <Outputs
        data={
          selectedRoles.length > 0
            ? { ...inputData, ...newClaims, roles: selectedRoles, exp: selectedExpiryDate }
            : { ...inputData, ...newClaims, exp: selectedExpiryDate }
        }
        generatedToken={generatedToken}
      />
    </>
  );
};

export default Inputs;
