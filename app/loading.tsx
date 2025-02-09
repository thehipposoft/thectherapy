import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="w-[200px] h-[150px] relative">
                    <Image fill alt="C-Therapy Logo" src={'/logo.svg'} />
                </div>
                <p>Loading...</p>
            </div>
        </div>
    )
  }