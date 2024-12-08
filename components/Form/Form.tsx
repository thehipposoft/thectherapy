"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

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
            <div className='flex justify-between items-center'>
                <Link href={'https://wa.link/8pvodq'} target='_blank' rel='noreferrer' className='group ml-2'>
                    <svg width="50" height="50" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0794141 9.88335C0.0788945 11.5372 0.514336 13.1516 1.34217 14.5747L0 19.4372L5.01504 18.1324C6.39684 18.88 7.95261 19.2741 9.5357 19.2747H9.53978C14.7535 19.2747 18.9978 15.0647 19 9.89086C19.0009 7.38345 18.0176 5.02561 16.2316 3.25191C14.4454 1.47843 12.0704 0.501031 9.53978 0.5C4.32517 0.5 0.0814922 4.70946 0.0794141 9.88335ZM3.06598 14.3296L2.87872 14.0347C2.09156 12.7928 1.67608 11.3576 1.67668 9.88394C1.67838 5.58353 5.20555 2.08481 9.54275 2.08481C11.6431 2.08569 13.6171 2.89812 15.1017 4.37217C16.5863 5.84636 17.4033 7.80602 17.4027 9.89027C17.4008 14.1907 13.8736 17.6898 9.53978 17.6898H9.53666C8.12554 17.6891 6.74159 17.3131 5.53464 16.6025L5.24741 16.4335L2.27139 17.2077L3.06598 14.3296V14.3296Z" className='group-hover:fill-nav duration-300' fill="#595959"/>
                        <path d="M7.17533 5.96052C6.99824 5.56999 6.81188 5.56211 6.64348 5.55526C6.50558 5.54937 6.34794 5.54981 6.19044 5.54981C6.0328 5.54981 5.77667 5.60865 5.56018 5.84321C5.34346 6.07798 4.73279 6.64533 4.73279 7.79925C4.73279 8.95324 5.57985 10.0684 5.69793 10.2251C5.81616 10.3814 7.33319 12.8252 9.7358 13.7653C11.7326 14.5466 12.1389 14.3912 12.5723 14.352C13.0057 14.313 13.9709 13.7848 14.1678 13.2372C14.3648 12.6895 14.3648 12.2201 14.3057 12.122C14.2467 12.0243 14.089 11.9656 13.8526 11.8484C13.6162 11.7311 12.4541 11.1636 12.2374 11.0854C12.0207 11.0072 11.8631 10.9681 11.7055 11.203C11.5479 11.4375 11.0952 11.9656 10.9572 12.122C10.8194 12.2788 10.6814 12.2983 10.4451 12.181C10.2086 12.0634 9.44731 11.816 8.54414 11.017C7.84144 10.3953 7.36703 9.62759 7.22914 9.39275C7.09124 9.15827 7.21437 9.03116 7.33289 8.91429C7.4391 8.8092 7.56935 8.64041 7.68766 8.5035C7.80552 8.36653 7.84485 8.2688 7.92368 8.11238C8.00257 7.95582 7.96309 7.81884 7.90408 7.70153C7.84485 7.58421 7.38551 6.42425 7.17533 5.96052Z" className='group-hover:fill-nav duration-300' fill="#6E6460"/>
                    </svg>
                </Link>
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
