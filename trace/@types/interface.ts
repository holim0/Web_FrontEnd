import { Submit } from "./type";

export interface WriteClick {
    handleNext?: () => void;
    handlePrev?: () => void;
    handleSubmit?: Submit;
}
