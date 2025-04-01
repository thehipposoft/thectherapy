import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const BannerMobile = () => {
  return (
    <div className='lg:hidden flex flex-col justify-center items-center my-24'>
        <div className='flex flex-col text-center items-center relative w-full'>
            <div className='rounded-full bg-nav flex justify-center items-center w-[150px] h-[150px] absolute -top-20'>
                <Image src={'/logo-blanco-1.svg'} width={240} height={180} alt='C-therapy logo' className='w-[125px]' />
            </div>
            <div className='bg-[#e5e4e2] w-full flex flex-col items-center'>
                <h2 className='text-nav text-2xl pt-24'>Look the way you feel<br/>with Skin Needling!</h2>
                <p className='text-nav text-xs pt-4 garet-heavy'>Skin Needling Collagen Induction Therapy is out hero<br/> treatment for firmer, plump, rejuvenated skin!</p>
                <Image src={'/assets/images/banner/cara-2.png'} alt='' width={731} height={680} className='pt-4 w-[50%] object-cover' />
            </div>
        </div>
        <div className='flex flex-col items-center gap-6'>
            <h2 className='text-2xl text-center pt-8'>If you have big skin goals,<br/> Skin Needling hits the target!</h2>
            <p className='text-center text-[8px] '>The FACIAL BLOOM is an advanced skin treatment is known for its fantastic ability<br /> to generate the growth of colagen and elastin. Skin Needling delivers impressive<br /> results in total skin rejuvenation. Due to the speed of the device, treatments are<br /> fast, reasonably comfortable, and your therapist can treat large or multiple<br/> areas in one appointment.</p>
        </div>
        <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true&offerItems=p%3A1591031'} target='_blank' rel='noreferrer' className=' mt-4 text-[#FFFFFF] border-[#333333] bg-[#333333] rounded-full border w-fit py-2 px-6 hover:bg-[#ffffff00] duration-300 hover:text-[#333333]'>ACCESS OUR SPECIAL OFFER</Link>
        <Link href={'/promotions'}  rel='noreferrer' className=' mt-4 text-[#FFFFFF] border-[#333333] bg-[#333333] rounded-full border w-fit py-2 px-6 hover:bg-[#ffffff00] duration-300 hover:text-[#333333]'>LEARN MORE</Link>
        <Image
            src={'/logo-white.png'}
            alt='C-Therapy logo white'
            width={80} height={80}
            quality={100}
            className='object-contain mt-6 rounded-full'
        />
        <div className='flex justify-between gap-4 py-5'>
            <div className='flex items-center gap-1'>
                <svg className='w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#333333clip0_1_1825)"><path d="M7.8 12h-.75.75Zm8.4 0h.75-.75ZM12 16.2v.75-.75Zm2.173 6.075.154.734-.154-.734Zm-4.346 0-.154.734.154-.734ZM2.276 8.032 1.58 7.75l.695.283Zm-.55 6.14-.735.155.734-.154ZM9.826 1.726 9.673.991l.154.734Zm4.346 0 .154-.734-.154.734ZM21.64 8.07l.218.718-.218-.718Zm-19.281 0-.218.717.218-.717Zm18.672.248A9.719 9.719 0 0 1 21.75 12h1.5a11.22 11.22 0 0 0-.83-4.248l-1.389.567ZM21.75 12c0 .693-.072 1.368-.209 2.018l1.468.31c.158-.752.241-1.53.241-2.328h-1.5Zm-.209 2.018a9.763 9.763 0 0 1-7.523 7.523l.31 1.468a11.263 11.263 0 0 0 8.68-8.682l-1.467-.309Zm-7.523 7.523A9.794 9.794 0 0 1 12 21.75v1.5c.797 0 1.576-.083 2.327-.241l-.309-1.468ZM12 21.75a9.794 9.794 0 0 1-2.018-.209l-.31 1.468c.752.158 1.53.241 2.328.241v-1.5ZM2.25 12a9.72 9.72 0 0 1 .72-3.684L1.58 7.749A11.22 11.22 0 0 0 .75 12h1.5Zm7.732 9.541a9.763 9.763 0 0 1-7.523-7.523l-1.468.31a11.263 11.263 0 0 0 8.682 8.68l.309-1.467Zm-7.523-7.523A9.794 9.794 0 0 1 2.25 12H.75c0 .797.083 1.576.241 2.327l1.468-.309Zm.51-5.702a9.77 9.77 0 0 1 7.013-5.857L9.672.991a11.27 11.27 0 0 0-8.09 6.758l1.388.567Zm7.013-5.857A9.794 9.794 0 0 1 12 2.25V.75c-.797 0-1.576.083-2.327.241l.309 1.468ZM12 2.25c.693 0 1.368.072 2.018.209l.31-1.468A11.294 11.294 0 0 0 12 .75v1.5Zm2.018.209a9.77 9.77 0 0 1 7.013 5.86l1.389-.567a11.27 11.27 0 0 0-8.093-6.76l-.309 1.467Zm-.56-.506c.29.908 1.364 4.403 1.803 7.615l1.487-.203c-.459-3.348-1.567-6.947-1.86-7.868l-1.43.456Zm1.803 7.615c.119.861.189 1.689.189 2.432h1.5c0-.832-.078-1.731-.202-2.635l-1.487.203Zm6.161-2.216c-1.153.35-3.319.964-5.554 1.377l.273 1.475c2.314-.427 4.54-1.06 5.717-1.416l-.436-1.436ZM15.868 8.73c-1.355.25-2.71.421-3.868.421v1.5c1.287 0 2.743-.188 4.14-.446l-.272-1.475ZM15.45 12c0 1.1-.155 2.38-.385 3.671l1.476.264c.239-1.333.409-2.71.409-3.935h-1.5Zm-.385 3.671c-.506 2.828-1.355 5.588-1.607 6.376l1.43.456c.257-.807 1.13-3.642 1.653-6.568l-1.476-.264Zm6.982-2.213c-.788.252-3.548 1.101-6.376 1.607l.264 1.476c2.926-.523 5.76-1.396 6.568-1.654l-.456-1.429Zm-6.376 1.607c-1.29.23-2.57.385-3.671.385v1.5c1.225 0 2.602-.17 3.935-.409l-.264-1.476ZM12 15.45c-1.1 0-2.38-.155-3.671-.385l-.264 1.476c1.333.239 2.71.409 3.935.409v-1.5Zm-3.671-.385c-2.828-.506-5.588-1.355-6.376-1.607l-.456 1.43c.807.257 3.642 1.13 6.568 1.653l.264-1.476ZM7.05 12c0 1.225.17 2.602.409 3.935l1.476-.264c-.23-1.29-.385-2.57-.385-3.671h-1.5Zm.409 3.935c.523 2.926 1.396 5.76 1.654 6.568l1.429-.456c-.252-.788-1.101-3.548-1.607-6.376l-1.476.264ZM9.113 1.497c-.294.921-1.402 4.52-1.86 7.868l1.485.203c.44-3.212 1.514-6.707 1.804-7.615l-1.43-.456Zm-1.86 7.868A19.75 19.75 0 0 0 7.05 12h1.5c0-.743.07-1.57.188-2.432l-1.486-.203ZM12 9.15c-1.158 0-2.513-.171-3.868-.421l-.273 1.475c1.398.258 2.854.446 4.141.446v-1.5Zm-3.868-.421c-2.236-.413-4.403-1.027-5.555-1.377L2.14 8.787c1.176.357 3.404.99 5.718 1.417l.273-1.475Zm13.248-1.36a.251.251 0 0 1 .042-.017l.436 1.436c.075-.023.146-.052.213-.087l-.691-1.332ZM1.884 8.672c.08.048.165.087.257.115l.436-1.435c.033.01.063.024.09.04l-.783 1.28Z" fill="#333"/></g></svg>
                <p className='text-[8px]'>www.thectherapy</p>
            </div>
            <div className='flex items-center gap-1'>
                <svg  className='w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#333"><path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63Z"/></g></svg>
                <p className='text-[8px]'>+61450409553</p>
            </div>
            <div className='flex items-center gap-1'>
                <svg className='w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V6.83772L1.49006 11.3675C1.10052 12.5362 1.8474 13.7393 3 13.963V20C3 21.1046 3.89543 22 5 22H9H10H14H15H19C20.1046 22 21 21.1046 21 20V13.963C22.1526 13.7393 22.8995 12.5362 22.5099 11.3675L21 6.83772V5C21 3.89543 20.1046 3 19 3H5ZM15 20H19V14H17.5H12H6.5H5V20H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20ZM11 20H13V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V20ZM3.38743 12L4.72076 8H6.31954L5.65287 12H4H3.38743ZM7.68046 12L8.34713 8H11V12H7.68046ZM13 12V8H15.6529L16.3195 12H13ZM18.3471 12L17.6805 8H19.2792L20.6126 12H20H18.3471ZM19 5V6H16.5H12H7.5H5V5H19Z" fill="#333333"></path> </g></svg>
                <p className='text-[8px]'>K3 High Street, Windsor, Victoria, CP 3181</p>
            </div>
        </div>
        <div className='flex bg-[#BAB8B2] w-full justify-center items-center py-2'>
            <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#333"><path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63Z"/></g></svg>
            <p className='text-[9px] garet-heavy pl-2'>GOT A QUESTION?</p>
            <p className='text-[9px] pl-2'>We're here to help! Contact Us through WhatsApp</p>
        </div>
        <div className='flex w-full text-center justify-center py-2'>
            <p className='text-[9px] text-center'>Cancelation policy applies to all bookings. If fully booked ask for our waitlist.</p>
        </div>
    </div>
  )
}

export default BannerMobile