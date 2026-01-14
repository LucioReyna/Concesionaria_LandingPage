interface SectionTitleProps {
    title: string
    subtitle?: string
    className?: string
    align?: "left" | "center"
}

export function SectionTitle({ title, subtitle, className = "", align = "left" }: SectionTitleProps) {
    return (
        <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto font-light tracking-wide">
                    {subtitle}
                </p>
            )}
            <div className={`h-[1px] w-12 bg-primary mt-6 ${align === "center" ? "mx-auto" : ""}`} />
        </div>
    )
}
