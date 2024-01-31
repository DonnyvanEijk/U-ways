import {Logo} from "@/app/(auth)/_components/logo";
import {ThemeProvider} from "@/components/theme-provider";
const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-6">
            <Logo/>
            <ThemeProvider
                attribute="class"
                forcedTheme="dark"
                storageKey="d-ways-theme"
            >
            {children}
            </ThemeProvider>
        </div>
     );
}
 
export default AuthLayout;