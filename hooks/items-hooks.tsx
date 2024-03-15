"use client"

import { LogoInfoContext } from "@/providers/logoInfo-provider";
import { useContext } from "react";
import { create } from "zustand";


export type logoDetail = {
    merchantName: string;
    merchantLogo: string;
    theme: {
        "--background": string;
        "--foreground": string;
        "--primary": string;
        "--primary-foreground": string;
    };
};

type logoInfoDetail = {
    data: logoDetail | null;
    loading: boolean,
    fetchData: () => void;
};

export const uselogoInfoDetail = create<logoInfoDetail>((set) => ({
    data: null,
    loading: true,
    fetchData: async () => {
        const response = await fetch("https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata", {cache: "force-cache"});
        const data: logoDetail = await response.json();
        set({ data: data, loading: false });
    },
}));

export const useLogoInfo = () => {
    const data = useContext(LogoInfoContext);
    return data;
};

