import Navbar from "@/shared/components/layout/navbar";


export default function LandingLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}