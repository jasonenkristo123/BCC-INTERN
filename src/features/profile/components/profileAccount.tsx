import Button from '@/shared/components/ui/button'

export default function ProfileAccountPage() {
  return (
    <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
      <div className="flex justify-between items-center mb-12 w-full">
        <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit">
          Informasi Akun
        </h2>
        <Button
          variant="primary"
          size="sm"
          href="/profile/account/edit-account"
          className="bg-text-primary border-none text-white py-3"
        >
          Edit
        </Button>
      </div>

      <div className="flex flex-col gap-8 lg:gap-10 w-full pr-40">
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Nama Lengkap
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            Dedy Corbuzier
          </p>
        </div>
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Email
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            Dedy@gmail.com
          </p>
        </div>
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Nomor Handphone
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            +62 123 456 789
          </p>
        </div>
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Alamat
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            Jakarta
          </p>
        </div>
        <div className="flex justify-between w-full ">
          <p className="font-roboto-400 text-hitamdikit/50 text-base sm:text-lg lg:text-xl">
            Jenis Kelamin
          </p>
          <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
            Laki-laki
          </p>
        </div>
      </div>
    </div>
  )
}
