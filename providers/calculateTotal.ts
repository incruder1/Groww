// "use client";

// import { logoDetail, uselogoInfoDetail } from "@/hooks/items-hooks";
// import React, { createContext, useContext, useEffect } from "react";


// export const LogoInfoContext = createContext<logoDetail | null>(null);

// export interface Props {
//     [propName: string]: any;
// }

// export const LogoInfoContextProvider = (props: Props) => {
//     const { data, fetchData } = uselogoInfoDetail();

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     return <LogoInfoContext.Provider value={data} {...props} />;
// };