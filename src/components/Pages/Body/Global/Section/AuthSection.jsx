export default function AuthSection({
    header,
    login,
    width,
    maxWidth,
    height,
    children,
}) {
    return (
        <section
            className="flex flex-col items-center bg-white
        py-2 px-4 rounded shadow-lg"
            style={{ width, maxWidth, height }}
        >
            <div className="flex justify-between space-around w-full items-end">
                {header && <h1 className="text-black font-bold">{header}</h1>}
                {login && (
                    <a className="text-primaryOrange font-bol text-[12px] no-underline hover:underline">
                        {login}
                    </a>
                )}
            </div>
            {children}
        </section>
    );
}
