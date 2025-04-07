
import { index as indexPageData} from "./pages/index"
import {programas as progPageData} from "./pages/programas"
import {equipo as equipoPageData} from "./pages/equipos"
import {comites as comitesData} from "./pages/comites"
import {preguntas as preguntasData} from "./pages/preguntas"
import {gallery as galleryPageData} from "./pages/gallery"
import {testimonios as testimoniosPageData} from "./pages/testimonios"
import {miembros as miembrosData} from "./pages/miembros"
import {blog as blogPageData} from "./pages/blog"

export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)

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
        case '/preguntas.html':           
            pageVariables = preguntasData
            break;
        case '/gallery.html':           
            pageVariables = galleryPageData
            break;
        case '/testimonios.html':           
            pageVariables = testimoniosPageData
            break;
        case '/miembros.html':           
            pageVariables = miembrosData
        break;
        case '/blog.html':           
            pageVariables = blogPageData
        break;
 

    }
    const finalContext = {
        ...pageVariables
    }
    //console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}
