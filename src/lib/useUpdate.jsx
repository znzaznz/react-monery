const {useEffect} = require("react");
const {useRef} = require("react");

const useUpdate = (fn,deps)=>{
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            fn()
        }
    },[fn,deps]);
}


export {useUpdate}