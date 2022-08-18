import { useContext } from "react";
import C3 from "./C3";
import { OrtakBaglam1 } from "./contexts/OrtakBaglam1";

function C2(props) {
    const yas = useContext(OrtakBaglam1);
    return (
        <>
            <p>Ben C2 Yas:{yas}</p>
            <C3 prop1={props.isim} />
        </>
    );
}

export default C2;