import React, {Suspense} from "react";
import { NavBar } from "@/app/(browse)/_components/navbar/index"
import {Sidebar, SideBarSkeleton} from "@/app/(browse)/_components/sidebar";
import {Container} from "@/app/(browse)/_components/container";
const BrowseLayout = ({
    children
}: {
    children:React.ReactNode
}) => {
    return(
        <>
            <NavBar/>
        <div className="flex h-full pt-20">
            <Suspense fallback={<SideBarSkeleton/>}>
            <Sidebar/>
            </Suspense>
            <Container>
                {children}
            </Container>
        </div>
        </>
    )
}

export default BrowseLayout