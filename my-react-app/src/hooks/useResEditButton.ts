import { useState } from "react";

export const useResEditButton = () => {

    const [result, setResult] = useState<number | null>(null);
    return {
        result, setResult
    };
}