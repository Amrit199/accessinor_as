import PricingTable from "@/components/pricing-table";

export default function Pricing() {
    return (
        <div className="w-full h-full">
            <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-32">
                    <PricingTable />
                </div>
            </div>
        </div>
    )
}