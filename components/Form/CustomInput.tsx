import React from 'react';

type InputTypes = {
    fieldName: any,
    fieldType: any,
    label: any,
    handleChange: any,
    value: any,
    validations: any,
    errors: any,
    size: any,
    placeholder: any,
};


const CustomInput = (
    {
        fieldName,
        fieldType,
        label,
        handleChange,
        value,
        validations,
        errors,
        placeholder
    }:InputTypes) => {
    return (
        <section className='mb-4'>
            <label className={'contact-label'}>{label}</label>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                className={`w-full py-5 px-8 bg-[#FAFAFA] border-[#CDCBC0] border focus-visible:bg-[#F4F5F0] focus-visible:border-[#585858] outline-none ${errors && errors[fieldName] ? `input error` : `input`}`}
                onChange={(event) => handleChange(event, validations)}
                value={value}
                placeholder={placeholder}
            />
            <span className={'error-message text-[#D22B2B]'}>{errors ? errors[fieldName] : null}</span>
        </section>
    )
};

export default CustomInput
