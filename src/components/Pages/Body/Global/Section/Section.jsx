export default function Section({ header, seeAll, width, maxWidth, height, children, marginBottom, open, openState }) {
    return (
        <section className="container flex flex-col items-center bg-white
        py-2 px-4 rounded shadow-lg my-3 md:flex-row md:flex-wrap"
        style={{ width, maxWidth, height, marginBottom }}>
            <div className="flex justify-between space-around w-full items-end">
                {header && <h1 className="text-black font-bold">{header}</h1>}
                {seeAll && <a onClick={() => open()} className="text-primaryOrange font-bol text-[12px] no-underline hover:underline">{openState ? 'See less' : 'See All'}</a>}
            </div>
            {children}
        </section>
    );
}
