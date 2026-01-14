import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className="group p-8 rounded-none bg-card/10 border border-white/5 hover:border-primary/20 hover:bg-card/30 transition-all duration-500">
            <div className="w-10 h-10 flex items-start justify-start mb-8 transition-transform duration-500 group-hover:-translate-y-1">
                <Icon className="w-8 h-8 text-primary/80 stroke-[1px]" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-4 text-foreground tracking-tight">{title}</h3>
            <p className="text-muted-foreground/70 text-sm font-light leading-relaxed">{description}</p>
        </div>
    )
}
