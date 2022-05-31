import React, { useEffect, useState } from 'react';
import OutputStyles from './styles/OutputStyles';
import ButtonStyles from './styles/ButtonStyles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface OutputProps {
  data: any;
  roles: string[];
  generatedToken: any;
}

const Outputs: React.FC<OutputProps> = ({ data, generatedToken, roles }) => {
  useEffect(() => {}, [data]);
  const [copied, setCopied] = useState(false);

  return (
    <section className='outputs'>
      <OutputStyles>
        <div className='textarea-wrapper'>
          <textarea
            title='payload'
            name='payload'
            id='payload'
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
            readOnly
            value={`
        {     ${Object.entries(data).map(key => {
          return `
                "${key.toString().replace(/,/g, '" : "')}"`;
        })}     
                ${
                  roles.length > 0
                    ? `"roles": [ ${roles.map(role => {
                        return `
                      "${role.trim()}"`;
                      })}
                ],`
                    : ''
                }
        }`}
          />
        </div>

        <div className='signature-wrapper'>
          <textarea
            title='signature'
            name='signature'
            id='signature'
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
            readOnly
            value={generatedToken}
          />
          <CopyToClipboard text={generatedToken} onCopy={copied ? () => setCopied(false) : () => setCopied(true)}>
            {copied ? (
              <ButtonStyles className='copied-button'>
                Copied <FontAwesomeIcon icon={faCheck} />
              </ButtonStyles>
            ) : (
              <ButtonStyles className='copy-button'>Copy</ButtonStyles>
            )}
          </CopyToClipboard>
        </div>
      </OutputStyles>
    </section>
  );
};

export default Outputs;
