import PricingTable from "@/components/pricing-table";

export default function Pricing() {
    return (
        <div className="max-width bg-slate-50 text-black py-12">
            <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <PricingTable />
                </div>
            </div>
        </div>
    )
}