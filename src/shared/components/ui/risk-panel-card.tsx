import Image from 'next/image'

type RiskLevel = 'high' | 'medium' | 'low';

interface IngridientCardProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
    loss: string;
    daysLeft: number;
    riskLevel: RiskLevel;
}

const riskConfig: Record<RiskLevel, {
    cardBg: string;
    badgeBg: string;
    badgeText: string;
    textColor: string;
    label: string;
}> = {
    high: {
        cardBg: 'bg-redlight',
        badgeBg: 'bg-pinklight',
        badgeText: 'text-rednormal',
        textColor: 'text-rednormal',
        label: 'High Risk'
    },
    medium: {
        cardBg: 'bg-orangelight/30',
        badgeBg: 'bg-orangelight bg-opacity-70',
        badgeText: 'text-orangnormal',
        textColor: 'text-orangnormal',
        label: 'Use Soon'
    },
    low: {
        cardBg: 'bg-greenlight/30',
        badgeBg: 'bg-greenlight bg-opacity-70',
        badgeText: 'text-primary-lebihmuda',
        textColor: 'text-primary-lebihmuda',
        label: 'Still Fresh'
    }
}


export default function RiskPanelCard({ imageSrc, imageAlt, name, loss, daysLeft, riskLevel }: IngridientCardProps) {
    const config = riskConfig[riskLevel];

    return (
        <div className={`w-full px-4 sm:px-5 py-3 sm:py-4 ${config.cardBg} rounded-[16px] flex items-center gap-3 sm:gap-4 mb-4 `}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={28}
                    height={28}
                    unoptimized
                    quality={100}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
            </div>
            <div className='flex-1'>
                <h3 className={`font-roboto-700 text-brown text-sm sm:text-base md:text-lg leading-[150%]`}>
                    {name}
                </h3>
                <p className={`font-roboto-500 text-brown text-[11px] sm:text-[13px] md:text-sm mt-1 leading-[150%]`}>
                    Jika tidak digunakan total kerugian&nbsp;
                    <span className={`${config.textColor} font-bold`}>
                        {loss}
                    </span>
                </p>
                <p className={`${config.textColor} font-bold text-[11px] sm:text-[13px] md:text-sm mt-0.5 leading-[150%]`}>
                    Sisa {daysLeft} hari lagi
                </p>
            </div>
            <div className={`${config.badgeBg} px-3 py-1.5 rounded-full shrink-0 flex items-center justify-center self-center `}>
                <p className={`${config.textColor} font-roboto-600 text-[10px] sm:text-xs md:text-sm whitespace-nowrap`}>
                    {config.label}
                </p>
            </div>
        </div>
    )
}