import { ReactElement, ReactNode } from "react";

export interface MainLayoutProps {
    children: ReactNode
}

const AppBaseLayout = ({children}: MainLayoutProps) => {
    return(
        <div className="w-screen h-screen dark:bg-gray-900">

            <header className="dark:bg-gray-700 text-white">
                <p>Header placeholder</p>
            </header>

            <div className="p-1">
            {children}
            </div>

            <footer className="absolute bottom-0 w-full dark:bg-gray-700 text-white">
                <p>Footer Placeholder</p>
            </footer>
            
        </div>
    )
}

export default AppBaseLayout;

export const useAppBaseLayout = (page: ReactElement) => {
    return(
      <AppBaseLayout>
        {page}
      </AppBaseLayout>
    )
}