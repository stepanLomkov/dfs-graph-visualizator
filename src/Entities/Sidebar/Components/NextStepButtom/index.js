import { useDFS } from "../../Hooks";

export function NextStepButtom () {
    const [ nextStep ] = useDFS();

    return (
        <div onClick={ nextStep }>Вперед</div>
    );
}