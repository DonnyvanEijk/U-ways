import {Logo} from "@/app/(auth)/_components/logo";
import {Search} from "@/app/(browse)/_components/navbar/search";
import {Actions} from "@/app/(browse)/_components/navbar/actions";
export const NavBar = () => {
return(
    <nav className="fixed top-0 w-full lg:px-4 flex justify-between items-center shadow-sm h-20 z-[49] bg-[#252731] px-2">
    <Logo/>
        <Search/>
        <Actions />
    </nav>
)
}

