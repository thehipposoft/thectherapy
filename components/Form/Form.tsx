"use client";
import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    name: '',
    customerEmail: '',
    message: '',
};

type FieldsType = {
    name: 'name' | 'customerEmail' | 'message';
    type: 'text' | 'textArea' | 'select' | 'email';
    label: string;
    placeholder: string;
    required?: boolean;
}

type MyCustomFormProps = {
    fields: FieldsType[];
    onSuccessMessage: string;
    onErrorMessage: string;
    emailServiceURL: string;
    submitButtonLabel: string;
};

type FormValues = {
    name: string;
    customerEmail: string;
    message: string;
};

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel
}:MyCustomFormProps) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const [values, setValues] = useState<FormValues>({
        name: '',
        customerEmail: '',
        message: '',
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-2 text-2xl'}>Thanks! </h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event:any) => {
        if (event) event.preventDefault();

        setIsAPILoading(true);
        axios.post(
            emailServiceURL,
            {
                message: values.message,
                name: values.name,
                customerEmail: values.customerEmail,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json, text/plain, */*',
                },
            }
        )
            .then(function (response) {
                setValues(initialValues);
                setMessageSent('succeed');
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(error.toString());
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    return (
        <form
            className={`form mx-auto mb-16`}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field)=> {
                    const { name, type, label, placeholder } = field;

                    switch (type) {
                        case 'textArea':
                            return (
                                <section className={'mb-4'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={5}
                                        cols={40}
                                        className='w-full resize-none py-5 px-8 bg-[#FAFAFA] border-[#CDCBC0] border focus-visible:bg-[#F4F5F0] focus-visible:border-[#585858] outline-none'
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        required={field.required}
                                    />
                                </section>
                            );
                        default:
                            return (
                                <section className='mb-4'>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={`w-full py-5 px-8 bg-[#FAFAFA] border-[#CDCBC0] border focus-visible:bg-[#F4F5F0] focus-visible:border-[#585858] outline-none input`}
                                        onChange={handleChange}
                                        value={values[name]}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            )
                    }
                })
            }
            {renderSentMessage()}
            <div className='flex justify-end'>
                <button
                    disabled={isAPILoading}
                    value={submitButtonLabel ? submitButtonLabel : 'Send'}
                    type="submit"
                    className={`${isAPILoading ? 'opacity-50' : ''} group hover:border-[#333333] duration-500 flex bg-[#FAFAFA] py-5 px-8 border-[#CDCBC0] border justify-between w-[210px] cursor-pointer`}>
                    <p>{submitButtonLabel}</p>
                    <svg className='group-hover:translate-x-2 duration-500' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#333"><path d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"/></g></svg>
                </button>
            </div>
        </form>
    )
};

export default MyCustomForm
