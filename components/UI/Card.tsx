import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
    className?: string;
}>;
const Card: React.FC<CardProps> = ({ children, className }) => {
    return <div className={`rounded-lg h-[120px] flex justify-center items-center ${className}`}
    >{children}</div>;
};

export default Card;