declare const useXInput: (argType: string) => {
    isPassword: boolean;
    show: boolean;
    type: string;
    toggleShow: () => void;
};
export default useXInput;
