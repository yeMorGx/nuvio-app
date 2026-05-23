type CardProps = {
    value: number;
    title: string;
    percent: string;
};

export function Card({
    value,
    title,
    percent,
}: CardProps) {
    return (
        <div
            className="
            bg-(--card)
            border border-(--card-border)
            rounded-lg
            p-6
            flex items-center gap-4
            cursor-pointer
            hover:scale-[1.02]
            hover:border-(--primary)
            transition-all duration-200
        "
        >
            <div className="w-12 h-12 bg-(--primary) top-[-20] relative rounded-full"></div>

            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-(--card-foreground)">
                    {value}
                </h1>

                <p className="text-lg text-zinc-500">
                    {title}
                </p>

                <p className="text-sm text-zinc-500">
                    <span className="text-green-900 font-semibold">
                        {percent}
                    </span>{" "}
                    vs ontem
                </p>
            </div>
        </div>
    );
}