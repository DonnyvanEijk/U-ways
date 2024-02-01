import React from "react";
import { NavBar } from "@/app/(browse)/_components/navbar/index"
const BrowseLayout = ({
    children
}: {
    children:React.ReactNode
}) => {
    return(
        <>
            <NavBar/>
        <div className="flex h-full pt-20">
            {children}
        </div>
        </>
    )
}

export default BrowseLayout