'use client';

import React, { useEffect, useState } from "react";

interface ClientOnly {
    children: React.ReactNode
}

export const ClientOnly = ({ children }: ClientOnly) => {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if(!hasMounted){
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}