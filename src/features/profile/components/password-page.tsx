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

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full lg:pr-20 xl:pr-40">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4 border-b border-hitamdikit/5 pb-4 sm:border-none sm:pb-0">
          <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
            Kata sandi
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl break-all">
            {passwordMasked}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4">
          <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
            Terakhir diubah
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            9 bulan lalu
          </p>
        </div>
      </div>
    </div>
  )
}
