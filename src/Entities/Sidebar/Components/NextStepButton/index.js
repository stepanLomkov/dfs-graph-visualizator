import { useDFS } from "../../Hooks";

export function NextStepButton () {
    const [ nextStep ] = useDFS();

    return (
        <button onClick={ nextStep }>Вперед</button>
    );
}