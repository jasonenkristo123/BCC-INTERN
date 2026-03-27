import ProfileSideBar from "@/features/profile/components/sideBar";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full bg-skyblue min-h-screen pt-30 pb-12 px-6 sm:px-10 flex ">
            <div className="w-full">
                <h1 className="font-roboto-500 text-2xl lg:text-3xl xl:text-4xl mb-8 text-hitamdikit">
                    Akun & Pengaturan
                </h1>
                
                <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full">
                    <ProfileSideBar />
                    <div className="flex-1 w-full bg-transparent">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}