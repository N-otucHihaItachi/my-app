import { useContext } from "react";
import { UserContext } from "./CompA";

function CompC() {
    const count = useContext(UserContext);
    return <div>Component C - count: {count}</div>;
}

export default CompC;