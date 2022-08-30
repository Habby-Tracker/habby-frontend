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
            className="bg-lightGrey px-4 border-2 border-black rounded shadow-lg"
            style={{ width, maxWidth, height }}
        >
            <div className="flex justify-between space-around w-full ">
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
