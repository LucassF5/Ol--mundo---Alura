import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
            {/* 
            
            Outlet serve pra aninhar rotas que vão ser englobadas no Route em BrowserRouter
            
            <PaginaPadrao >
                <OutraPagina />
            </PaginaPadrao >
            
            */}
        </main>
    )
}