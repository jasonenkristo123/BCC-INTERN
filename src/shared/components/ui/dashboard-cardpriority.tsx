import { FoodItem } from "@/features/dashboard/dataDummy/dataDummy";
import Button from "./button";


type ExpiryLevel = "red" | "orange" | "green";

function getExpiryLevel(daysleft: number): ExpiryLevel {
    if (daysleft <= 2) return "red";
    if (daysleft <= 5) return "orange";
    return "green";
}

const LEVEL_CONFIG: Record<ExpiryLevel, {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    btnBg: string;
    btnText: string;
    btnBorder: string;
    lossText: string;
    statusText: string;
    statusLabel: string;
    dot: string;
}> = {
    red: {
        bg: "bg-red-50",
        border: "border-red-100",
        badgeBg: "bg-red-500",
        badgeText: "text-white",
        btnBg: "bg-red-500 hover:bg-red-600 text-white shadow-red-200 shadow-md",
        btnText: "text-white",
        btnBorder: "",
        lossText: "text-red-500",
        statusText: "text-red-500",
        statusLabel: "Harus segera digunakan",
        dot: "bg-red-400",
    },
    orange: {
        bg: "bg-amber-50",
        border: "border-amber-100",
        badgeBg: "bg-amber-400",
        badgeText: "text-white",
        btnBg: "bg-white hover:bg-amber-50 text-amber-500 border border-amber-300 shadow-amber-100 shadow-sm",
        btnText: "text-amber-500",
        btnBorder: "border border-amber-300",
        lossText: "text-amber-500",
        statusText: "text-amber-500",
        statusLabel: "Perlu diperhatikan",
        dot: "bg-amber-400",
    },
    green: {
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        badgeBg: "bg-emerald-400",
        badgeText: "text-white",
        btnBg: "bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-300 shadow-emerald-100 shadow-sm",
        btnText: "text-emerald-600",
        btnBorder: "border border-emerald-300",
        lossText: "text-emerald-600",
        statusText: "text-emerald-600",
        statusLabel: "Aman",
        dot: "bg-emerald-400",
    },
};


interface FoodExpiryCardProps {
    item: FoodItem;
    onUse?: (id: number) => void;
}

export default function FoodExpiryCard({ item, onUse }: FoodExpiryCardProps) {
    const level = getExpiryLevel(item.daysLeft);
    const cfg = LEVEL_CONFIG[level];

    return (
        <div className={`flex flex-col sm:flex-row flex-wrap items-start gap-3 rounded-2xl border p-3 sm:p-4 transition-all duration-200 hover:shadow-lg active:scale-[0.99] ${cfg.bg} ${cfg.border}`}>
            {/* Top row: icon + text */}
            <div className="flex flex-1 items-center gap-3 min-w-0">
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-white text-2xl sm:text-3xl shadow-sm">
                    {item.image}
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                    <p className="truncate font-semibold text-gray-800 text-[13px] sm:text-[15px] leading-[150%]">
                        {item.name}&nbsp;
                        <span className="font-normal text-gray-400">{item.weight}</span>
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-500 wrap-break-word">
                        Jika tidak digunakan total kerugian&nbsp;
                        <span className={`font-semibold ${cfg.lossText}`}>
                            Rp {item.loss}
                        </span>
                    </p>
                    <div className="mt-0.5 flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[11px] sm:text-xs font-medium ${cfg.statusText}`}>
                            Sisa {item.daysLeft} hari lagi - {cfg.statusLabel}
                        </span>
                    </div>
                </div>
            </div>

            <Button
                variant="primary"
                size="sm"
                onClick={() => onUse?.(item.id)}
                className={`${cfg.btnBg} ${cfg.btnText} ${cfg.btnBorder} cursor-pointer self-center shrink-0 px-3 sm:px-6 text-xs sm:text-sm`}
            >
                Gunakan
            </Button>
        </div>
    )
}