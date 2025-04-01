import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col md:w-[850px] w-[90vw] mx-auto relative z-20">
            <div>
                <h1 className="uppercase garet text-center md:text-6xl text-5xl md:py-16 pt-28 pb-8">promotions</h1>
            </div>
            <Image src={'/assets/images/promotions/1.png'} width={1280} height={837} alt="" />
            <Image src={'/assets/images/promotions/2.png'} width={1280} height={1192} alt="" />
            <Image src={'/assets/images/promotions/3.png'} width={1280} height={364} alt="" />
            <div className="flex justify-center items-center h-32">
                <Link href={'https://wa.link/n3wz5p'} target="_blank" className="flex gap-4 bg-[#383838] arimo-bold tracking-widest shadow-lg px-12 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M6.014 8.00613c.11427-.90373 1.28877-2.13199 2.22088-1.9957l-.00149-.00149c.90712.17238 1.6252 1.73367 2.03011 2.43571.2869.50937.1006 1.02545-.167 1.24322-.361.29096-.92551.69243-.80707 1.09553C9.5 11.5 12 14 13.2296 14.7107c.4654.269.8029-.4405 1.0911-.804.2094-.2796.7259-.4467 1.2341-.1707.759.442 1.474.9557 2.1352 1.534.3302.276.4077.6839.1789 1.115-.403.7593-1.5686 1.7606-2.4147 1.5571C13.9764 17.5868 8 15.27 6.08033 8.55801c-.10796-.31753-.08078-.43757-.06633-.55188Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c-1.2236 0-1.9006-.1313-3-.5l-2.10557 1.0528C5.56462 24.2177 4 23.2507 4 21.7639V19.5c-2.15345-2.008-3-4.3233-3-7.5C1 5.92487 5.92487 1 12 1c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11Zm-6-4.3697-.63605-.5931C3.69087 16.4772 3 14.7331 3 12c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-.9857 0-1.448-.089-2.36405-.3962l-.78748-.2641L6 21.7639v-3.1336Z"/></g></svg>
                    0450409553
                </Link>
            </div>
            <Image src={'/assets/images/promotions/4.png'} width={1280} height={954} alt="" />
            <div className="flex flex-col gap-8 justify-center items-center h-48">
                <h2 className="uppercase md:text-3xl text-xl text-center text-nav arimo-bold tracking-wider">Book a FREE Consultation Today!</h2>
                <div className="flex md:gap-8 gap-4">
                    <Link href={'https://www.fresha.com/es/a/the-c-therapy-melbourne-k3-high-street-b0pgn0xk/booking?allOffer=true&menu=true&offerItems=p%3A1591031'} target='_blank'className="flex md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.5V2M5.06066 5.06066 4 4m1.06066 9L4 14.0607m9-9.00004L14.0607 4M3.5 9H2m6.5-.5 4.1111 12.7778L15.5 18.3889 19.1111 22 22 19.1111 18.3889 15.5l2.8889-2.8889L8.5 8.5Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        BOOK ONLINE
                    </Link>
                    <Link href={'https://wa.link/n3wz5p'} target="_blank" className="md:flex hidden md:gap-4 gap-2 bg-[#383838] arimo-bold md:tracking-widest shadow-lg md:px-12 px-4 py-3 rounded-3xl text-[#FFFFFF] hover:scale-105 duration-500 hover:underline">
                        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M6.014 8.00613c.11427-.90373 1.28877-2.13199 2.22088-1.9957l-.00149-.00149c.90712.17238 1.6252 1.73367 2.03011 2.43571.2869.50937.1006 1.02545-.167 1.24322-.361.29096-.92551.69243-.80707 1.09553C9.5 11.5 12 14 13.2296 14.7107c.4654.269.8029-.4405 1.0911-.804.2094-.2796.7259-.4467 1.2341-.1707.759.442 1.474.9557 2.1352 1.534.3302.276.4077.6839.1789 1.115-.403.7593-1.5686 1.7606-2.4147 1.5571C13.9764 17.5868 8 15.27 6.08033 8.55801c-.10796-.31753-.08078-.43757-.06633-.55188Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c-1.2236 0-1.9006-.1313-3-.5l-2.10557 1.0528C5.56462 24.2177 4 23.2507 4 21.7639V19.5c-2.15345-2.008-3-4.3233-3-7.5C1 5.92487 5.92487 1 12 1c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11Zm-6-4.3697-.63605-.5931C3.69087 16.4772 3 14.7331 3 12c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-.9857 0-1.448-.089-2.36405-.3962l-.78748-.2641L6 21.7639v-3.1336Z"/></g></svg>
                        0450409553
                    </Link>
                </div>
            </div>
            <Image src={'/assets/images/promotions/5.png'} width={1280} height={274} alt="" />
        </div>
    );
}