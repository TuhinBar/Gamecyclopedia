import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
    className?: string;
}>;
const Card: React.FC<CardProps> = ({ children, className }) => {
    return <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}
    >{children}</div>;
};

export default Card;