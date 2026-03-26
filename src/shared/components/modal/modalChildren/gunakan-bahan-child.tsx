import Image from "next/image";



export default function GunakanBahanChild() {
    return (
        <div className="text-center space-y-6">
            <div className="bg-primaryskyblue mx-auto w-[60px] h-[60px] rounded-xl flex items-center justify-center ">
                <Image src='/assets/gunakanicon.webp' alt="icon" width={34} height={34} />
            </div>
            <div>
                <h1 className="text-hitamdikit font-roboto-600 lg:text-xl">
                    Gunakan Bahan
                </h1>

                <div>
                    <p>
                        Bawang Merah 
                    </p>
                </div>
            </div>
        </div>
    )
}