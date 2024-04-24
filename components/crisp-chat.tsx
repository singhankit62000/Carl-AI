"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("1376328a-e748-4c5a-b718-28f2a5528a8d");
    }, []);

    return null;
}