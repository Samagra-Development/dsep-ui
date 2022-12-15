import { FC } from 'react'

const Rating: FC<{ value: number; text?: string; color?: string;size?:number }> = ({ value, text, color,size =2}) => {
    return (
        <div className="rating">
            <span>
                <i style={{ color }} className={value >= 1 ? `fas fa-star fa-${size}x` : value >= 0.5 ? `fas fa-star-half-alt fa-${size}x` : `far fa-star fa-${size}x`}></i>
            </span>

            <span>
                <i style={{ color }} className={value >= 2 ? `fas fa-star fa-${size}x` : value >= 1.5 ? `fas fa-star-half-alt fa-${size}x` : `far fa-star fa-${size}x`}></i>
            </span>

            <span>
                <i style={{ color }} className={value >= 3 ? `fas fa-star fa-${size}x` : value >= 2.5 ? `fas fa-star-half-alt fa-${size}x` : `far fa-star fa-${size}x`}></i>
            </span>

            <span>
                <i style={{ color }} className={value >= 4 ? `fas fa-star fa-${size}x` : value >= 3.5 ? `fas fa-star-half-alt fa-${size}x` : `far fa-star fa-${size}x`}></i>
            </span>

            <span>
                <i style={{ color }} className={value >= 5 ? `fas fa-star fa-${size}x` : value >= 4.5 ? `fas fa-star-half-alt fa-${size}x` : `far fa-star fa-${size}x`}></i>
            </span>

            <span>{text}</span>
        </div >
    )
}

Rating.defaultProps = {
    color: '#f8e825',
    size:2
}

export default Rating
