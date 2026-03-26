import type { ExpiryInfo, ExpiryStatus } from "@/shared/types/food";

export function getExpiryStatus(expiredEstimation: Date): ExpiryInfo {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const exp = new Date(expiredEstimation);
    exp.setHours(0, 0, 0, 0);

    const diffMs = exp.getTime() - now.getTime();
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    let status: ExpiryStatus;
    if (daysLeft <= 0) {
        status = "expired";
    } else if (daysLeft < 3) {
        status = "expired"; // treat < 3 days as red
    } else if (daysLeft < 6) {
        status = "warning";
    } else {
        status = "safe";
    }

    const configs: Record<
        ExpiryStatus,
        Omit<ExpiryInfo, "daysLeft" | "label" | "actionLabel">
    > = {
        expired: {
            status: "expired",
            cardBorderClass: "border-l-red-500",
            badgeBgClass: "bg-redlight",
            badgeTextClass: "text-merah",
            progressBarClass: "bg-merah",
            actionBtnClass:
                "border-2 border-red-500 text-red-600 hover:bg-red-50 font-semibold",
        },
        warning: {
            status: "warning",
            cardBorderClass: "border-l-orange-500",
            badgeBgClass: "bg-redlight",
            badgeTextClass: "text-orangnormal",
            progressBarClass: "bg-orangnormal",
            actionBtnClass:
                "border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold",
        },
        safe: {
            status: "safe",
            cardBorderClass: "border-l-emerald-500",
            badgeBgClass: "bg-primaryskyblue",
            badgeTextClass: "text-text-primary",
            progressBarClass: "bg-text-primary",
            actionBtnClass:
                "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold",
        },
    };

    let label: string;
    if (daysLeft <= 0) {
        label = `${Math.abs(daysLeft)} Hari Lewat`;
    } else if (daysLeft === 1) {
        label = "1 Hari Lagi";
    } else {
        label = `${daysLeft} Hari Lagi`;
    }

    const actionLabel: "Buang" | "Gunakan" =
        daysLeft <= 0 ? "Buang" : "Gunakan";

    return {
        ...configs[status],
        daysLeft,
        label,
        actionLabel,
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
        .format(amount)
        .replace("IDR", "Rp");
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

