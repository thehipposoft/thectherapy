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
                        placeholder: 'Nombre',
                        validations: [required]
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: '',
                        placeholder: 'Email',
                        validations: [required, email]
                    },
                    {
                        name: 'message',
                        type: 'text',
                        label: '',
                        placeholder: 'Mensaje',
                        validations: [required]
                    },
                ]}
                onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
                onErrorMessage={'Please, try again in some minutes'}
                submitButtonLabel={'SEND'}
                emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/steel-art-mail'} 
            />
        </div>
    );
};

export default ContactForm;