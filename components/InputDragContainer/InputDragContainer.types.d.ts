import { NumericInputDragProps } from '../../hooks/useNumericInput/useNumericInput.types';
export interface InputDragContainerProps {
    className?: string;
    drag: NumericInputDragProps;
    children?: preact.ComponentChildren;
}
