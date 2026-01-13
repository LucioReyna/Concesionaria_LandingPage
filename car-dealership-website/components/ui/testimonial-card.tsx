import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
    name: string
    rating: number
    text: string
    date?: string
}

export function TestimonialCard({ name, rating, text, date }: TestimonialCardProps) {
    return (
        <div className="bg-card/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl relative">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                    />
                ))}
            </div>
            <p className="text-muted-foreground mb-6 italic relative z-10">"{text}"</p>
            <div className="flex items-center justify-between">
                <p className="font-bold text-foreground">{name}</p>
                {date && <p className="text-xs text-muted-foreground/50">{date}</p>}
            </div>
        </div>
    )
}
