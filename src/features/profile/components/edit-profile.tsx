"use client"

import { useForm } from "react-hook-form";
import { TEditProfileSchema, EditProfileSchema } from "../schemas/profile-form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/button";



export default function EditProfilePage() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset 
    } = useForm<TEditProfileSchema>({
        resolver: zodResolver(EditProfileSchema),
        defaultValues: {
            namaLengkap: "",
            email: "",
            nomorHandphone: "",
            alamat: "",
            jenisKelamin: "",
        }
    })

    const onSubmit = async () => {
        try {
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
            <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit mb-7">
                Informasi Akun
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nama-lengkap" className="font-roboto-400 text-base sm:text-lg lg:text-xl block">
                        Nama Lengkap
                    </label>
                    <input 
                    type="text" 
                    id="nama-lengkap" 
                    placeholder="Dedy Corbuzier"
                    {...register("namaLengkap")}  
                    className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
                    />
                    {errors.namaLengkap && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.namaLengkap.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="font-roboto-400 text-base sm:text-lg lg:text-xl block">
                        Email
                    </label>
                    <input 
                    type="text" 
                    id="email" 
                    placeholder="dedy@gmail.com"
                    {...register("email")}  
                    className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="nomor-handphone" className="font-roboto-400 text-base sm:text-lg lg:text-xl block">
                        Nomor Handphone
                    </label>
                    <input 
                    type="text" 
                    id="nomor-handphone" 
                    placeholder="+62 123 456 789"
                    {...register("nomorHandphone")}  
                    className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
                    />
                    {errors.nomorHandphone && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.nomorHandphone.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="alamat" className="font-roboto-400 text-base sm:text-lg lg:text-xl block">
                        Alamat
                    </label>
                    <input 
                    type="text" 
                    id="alamat" 
                    placeholder="Dedy Corbuzier"
                    {...register("alamat")}  
                    className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
                    />
                    {errors.alamat && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.alamat.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="jenis-kelamin" className="font-roboto-400 text-base sm:text-lg lg:text-xl block">
                        Jenis Kelamin
                    </label>
                    <input 
                    type="text" 
                    id="jenis-kelamin" 
                    placeholder="Laki-laki"
                    {...register("jenisKelamin")}  
                    className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
                    />
                    {errors.jenisKelamin && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.jenisKelamin.message}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-2 mt-9 gap-6 ">
                    <Button variant="primary" size="splg" href="/profile/account" className="bg-white border-text-primary text-text-primary">
                        Batalkan
                    </Button>
                    <Button variant="primary" size="splg" href="/profile/account" className="bg-text-primary text-white">
                        {isSubmitting ? "Menyimpan..." : "Simpan"}
                    </Button>
                </div>
            </form>


        </div>
    )
}