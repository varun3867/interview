Case I. useEffect with dependency array having some values. 
        useEffect(()=>{}, [ el1, el2, el3 ])
        i) It will run once after the component renders for the very first time.
        ii) Again it will run after the component re-renders but only if the value 
        of any of the dependencies changes. If the component re-renders but the value
         of any of the dependencies do not change then useEffect won’t run.
         (The component may re-render because of a change in state or props.)
Case II. useEffect with empty dependency array. 
        useEffect(()=>{},[ ])
        It will run only once — after the component renders for the very first time.
Case III. useEffect with no dependency array. 
        useEffect(()=>{})
        It is a valid syntax. It will run after the component renders and after 
        every re-render of the component.

*Very Important* 
        Never add the states as dependencies which are being changed in the 
        effect function. Otherwise it will cause an infinite loop.
        
        const [value, setValue] = useState(false);
        useEffect(() => {
                console.log(“effect”);
                setValue((prevState) => !prevState);
        },[value]);