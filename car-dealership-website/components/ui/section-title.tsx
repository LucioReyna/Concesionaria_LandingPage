interface SectionTitleProps {
    title: string
    subtitle?: string
    className?: string
    align?: "left" | "center"
}

export function SectionTitle({ title, subtitle, className = "", align = "left" }: SectionTitleProps) {
    return (
        <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={`h-1 w-20 bg-primary/80 rounded-full mt-4 ${align === "center" ? "mx-auto" : ""}`} />
        </div>
    )
}
