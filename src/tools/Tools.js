export function GeneralBtn({ btnBorderColor, text }) {
    return (
        <button className="generalBtn" style={{
            border: `2px solid ${btnBorderColor}`
        }}>{text}</button>
    )
}