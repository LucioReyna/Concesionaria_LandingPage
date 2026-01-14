import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
    name: string
    rating: number
    text: string
    date?: string
}

export function TestimonialCard({ name, rating, text, date }: TestimonialCardProps) {
    return (
        <div className="bg-card/20 border border-white/5 p-10 rounded-none relative overflow-hidden group">
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10 space-y-6">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-3 h-3 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                        />
                    ))}
                </div>

                <p className="text-lg md:text-xl font-serif italic text-foreground/90 leading-relaxed">
                    "{text}"
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
                    <div>
                        <p className="text-xs tracking-widest uppercase text-primary font-medium">{name}</p>
                        {date && <p className="text-[10px] tracking-wider text-muted-foreground/40 mt-1 uppercase">{date}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
