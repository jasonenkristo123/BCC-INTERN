import Button from '@/shared/components/ui/button'

export default function PasswordPage() {
  const password = 'dedycorbuziergantengbanget'
  const passwordLength = password.length
  const passwordMasked = '*'.repeat(passwordLength)
  return (
    <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
      <div className="flex justify-between items-center mb-12 w-full">
        <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit">
          Kata Sandi
        </h2>
        <Button
          variant="primary"
          size="sm"
          href="/profile/password/edit-password"
          className="bg-text-primary border-none text-white py-3"
        >
          Edit
        </Button>
      </div>

      <div className="flex flex-col gap-8 lg:gap-10 w-full pr-40">
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Kata sandi
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            {passwordMasked}
          </p>
        </div>
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Terakhir diubah
          </p>
          <p className="font-roboto-500 pr-33 text-hitamdikit text-base sm:text-lg lg:text-xl">
            9 bulan lalu
          </p>
        </div>
      </div>
    </div>
  )
}
