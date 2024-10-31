import React from 'react';
import { Form } from './Form';

const ContactForm = () => {
    return (
        <Form
            fields={[
                {
                    name: 'name',
                    type: 'text',
                    label: '',
                    placeholder: 'Your Name',
                    required: true,
                },
                {
                    name: 'customerEmail',
                    type: 'email',
                    label: '',
                    placeholder: 'Email Adress',
                    required: true,
                },
                {
                    name: 'message',
                    type: 'textArea',
                    label: '',
                    placeholder: 'Your Message',
                },
            ]}
            onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
            onErrorMessage={'Please, try again in some minutes'}
            submitButtonLabel={'Send'}
            emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api//thectherapy-email'}
        />
    );
};

export default ContactForm;