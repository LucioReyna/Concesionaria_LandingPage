import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className="group p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/50 hover:bg-card/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    )
}
