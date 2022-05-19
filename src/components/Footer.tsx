import FooterStyles from './styles/FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <a href='https://github.com/Enabler-AS/JWT-generator' target='_blank' rel='noreferrer'>
        An open-source project
      </a>{' '}
      created by{' '}
      <a href='https://www.enabler.no' target='_blank' rel='noreferrer'>
        enabler
      </a>
      <div className='contact-links'>
        <a href='mailto:post@enabler.no'>
          <FontAwesomeIcon icon={faEnvelope} title='Email Link' />
        </a>
        <a href='https://github.com/Enabler-AS/JWT-generator' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithubSquare} title='GitHub Profile' />
        </a>
        <a
          href='https://www.linkedin.com/company/enabler-as/'
          target='_blank'
          title='LinkedIn Profile'
          rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} title='LinkedIn Profile' />
        </a>
        <a href='https://www.facebook.com/EnablerAS' target='_blank' title='Facebook Profile' rel='noreferrer'>
          <FontAwesomeIcon icon={faFacebookSquare} title='Facebook Profile' />
        </a>
        <a href='https://www.instagram.com/enabler.no/ ' target='_blank' title='Instagram Profile' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagramSquare} title='Instagram Profile' />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
