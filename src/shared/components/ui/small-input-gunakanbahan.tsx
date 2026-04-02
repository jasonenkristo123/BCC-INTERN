import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm,
  FieldValues,
  Path,
  SubmitHandler,
  type Resolver,
} from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  id?: string
  onSubmit: SubmitHandler<T>
  schema: Parameters<typeof zodResolver>[0]
  fieldName: Path<T>
  maxWeight?: number
  unitWeight?: string | number
}

export default function SmallInputGunakanBahan<T extends FieldValues>({
  id,
  onSubmit,
  schema,
  fieldName,
  maxWeight,
  unitWeight,
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<T>({
    resolver: zodResolver(schema) as unknown as Resolver<T>,
  })

  const errorMessage = errors[fieldName]?.message as string | undefined

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full max-w-[164px] mt-6 mx-auto border border-hitamdikit/30 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-merah focus-within:border-merah transition-all">
        <input
          type="number"
          step="any"
          placeholder="Contoh : 10"
          className="w-full px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit outline-none"
          {...register(fieldName, {
            required: 'Jumlah wajib diisi',
            valueAsNumber: true,
            min: { value: 0.1, message: 'Minimal 0.1' },
            max: {
              value: maxWeight || Infinity,
              message: `Maksimal ${maxWeight} ${unitWeight}`,
            },
          })}
        />
        <div className="border-l border-hitamdikit/30 flex items-center justify-center px-4 bg-gray-50 text-hitamdikit font-roboto-400">
          <p className="text-sm">{unitWeight || 'g'}</p>
        </div>
      </div>
      <div className="h-5">
        {errorMessage && (
          <p className="text-red-500 text-xs mt-1 text-center font-roboto-400">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  )
}
