const SVGLinha13 = () =>{
    return(
        <>
            <path className="segmento-engenheirogoulart-guarulhoscecap" d="M 1299 575 L 1624 238 L  1624 165 "
                  fill="none" stroke="yellow" stroke-width="16" stroke-linecap="round"></path>
            <path className="segmento-guarulhoscecap-aeroportoguarulhos" d="M 1624 165 L 1624 81"
                  fill="none" stroke="yellow" stroke-width="16" stroke-linecap="round"></path>

            <circle className="estacao-engenheirogoulart engenheirogoulart" cx="1305" cy="568" r="6" fill="red"/>
            <circle className="estacao-guarulhoscecap guarulhoscecap" cx="1624" cy="165" r="6" fill="red"/>
            <circle className="estacao-aeroportoguarulhos aeroportoguarulhos" cx="1624" cy="85" r="6" fill="red"/>
        </>
    )
}
export default SVGLinha13;