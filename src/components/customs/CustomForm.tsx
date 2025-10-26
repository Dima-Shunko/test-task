import {ReactNode} from "react";

type Props = {
    onSubmit?: (e: React.FormEvent) => void,
    children: ReactNode,
    title: string,
}
export const CustomForm = ({onSubmit, children, title}: Props) => (
    <div className="container">
        <h2>{title}</h2>
        <form onSubmit={onSubmit} className="form-container">
            {children}
        </form>
    </div>
);
