export default function Card({ image, header, children, loadRef, backgroundColor, textColor, value }) {
    return (
        <div ref={loadRef} style={{ color: textColor, backgroundColor }} value={value}>
            {image && <img src={image} alt={header}/>}
            <h2>{header}</h2>
            {children}
        </div>
    );
}
