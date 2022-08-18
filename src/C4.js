import { useContext } from "react";
import {OrtakBaglam1} from "./contexts/OrtakBaglam1"

function C4({ isim }) {
    const yas = useContext(OrtakBaglam1);
    return (
        <>
            <p>Ben C4 Isim: {isim} Yas: {yas}</p>
        </>
    );
}

export default C4;