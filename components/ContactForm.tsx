import React from 'react';
import { Form } from './Form';
import { required, email } from './fieldValidations'

const ContactForm = () => {
    return (
        <div>
            <Form
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: '',
                        placeholder: 'Your Name',
                        validations: [required]
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: '',
                        placeholder: 'Email Adress',
                        validations: [required, email]
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: '',
                        placeholder: 'Your Message',
                        validations: [required]
                    },
                ]}
                onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
                onErrorMessage={'Please, try again in some minutes'}
                submitButtonLabel={'Send'}
                emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/steel-art-mail'} 
            />
        </div>
    );
};

export default ContactForm;