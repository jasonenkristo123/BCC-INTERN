import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TJumlahBahanSchema, jumlahBahanSchema } from "../../schemas/modalSchema";

type InputProps = {
    id?: string;
    onSubmit: (data: TJumlahBahanSchema) => void;
}

export default function SmallInputGunakanBahan({ id, onSubmit }: InputProps) {
    const { register, formState: { errors }, handleSubmit } = useForm<TJumlahBahanSchema>({
        resolver: zodResolver(jumlahBahanSchema),
        defaultValues: {
            jumlah: 0,
        },
    });


    return (
        <form id={id} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full max-w-[164px] mt-6 mx-auto border border-hitamdikit/30 rounded-xl overflow-hidden">
                <input
                    type="number"
                    placeholder="Contoh : 10, 20, 30"
                    className="w-full border border-hitamdikit/30 rounded-xl rounded-r-none px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit"
                    {...register('jumlah', {
                        required: 'Jumlah wajib diisi',
                        valueAsNumber: true,
                    })}
                />
                <div className="border border-hitamdikit/30 rounded-xl rounded-l-none flex items-center justify-center p-3">
                    {/* {items.unit} */}
                    <p>g</p>
                </div>
            </div>
            {errors.jumlah && (
                <p className="text-red-500 text-sm">{errors.jumlah.message}</p>
            )}
        </form>
    )
}