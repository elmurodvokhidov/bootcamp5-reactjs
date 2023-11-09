import { useContext } from "react";
import { ContextData } from "./context/ContextComp";

function ComponentA() {
    const { user, setUser } = useContext(ContextData);
    function change() {
        setUser("O'zgardi!")
    }

    return (
        <div>
            ComponentA
            <h1>{user}</h1>
            <button onClick={change}>change me!</button>
        </div>
    );
}

export default ComponentA;