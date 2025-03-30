import { navigation } from "./common/navigation"

import { index as indexPageData} from "./pages/index"
import {programas as progPageData} from "./pages/programas"
import {equipo as equipoPageData} from "./pages/equipos"
import {comites as comitesData} from "./pages/comites"


export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...navigation
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = indexPageData
            break;
        case '/programas.html':
            pageVariables = progPageData
            break;
        case '/equipos.html':           
            pageVariables = equipoPageData
            break;
        case '/comites.html':           
            pageVariables = comitesData
        break;
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    //console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}
