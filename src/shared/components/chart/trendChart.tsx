import { Bar } from "react-chartjs-2"
import { TrendDummy } from "@/shared/dummyData/trend-dummy"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


export default function TrendChart() {
    return (
        <div className="h-[340px] sm:h-[360px] lg:h-[380px]">
            <Bar
                data={{
                    labels: TrendDummy.map((data) => data.bulan),
                    datasets: [
                        {
                            label: 'Bahan Kedaluwarsa',
                            data: TrendDummy.map((data) => data.expired),
                            backgroundColor: '#1c996d',
                            borderRadius: 5,
                            barThickness: 'flex',
                            maxBarThickness: 50,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            min: 0,
                            max: 150,
                            ticks: {
                                stepSize: 5,
                            },
                        },
                    },
                    animations: {
                        y: {
                            duration: 5000,
                            easing: 'easeOutQuart',
                            from: 0,
                        },
                        opacity: {
                            duration: 5000,
                            from: 1,
                            to: 0,
                        },
                    },
                }}
            />
        </div>
    )
}