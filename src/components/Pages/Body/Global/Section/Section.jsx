export default function Section({ header, seeAll, width, maxWidth, height, children }) {
    return (
        <section className="container flex flex-col items-center bg-white
        py-2 px-4 rounded shadow-lg my-3"
        style={{ width, maxWidth, height }}>
            <div className="flex justify-between space-around w-full items-end">
                {header && <h1 className="text-black font-bold">{header}</h1>}
                {seeAll && <a className="text-primaryOrange font-bol text-[12px] no-underline hover:underline">{'See all'}</a>}
            </div>
            {children}
        </section>
    );
}
