









// import { useState } from 'react'

// import './App.css'
//  function App(){

// const [ name, setPara,]=useState(true)

// function next(){


// setPara(false)
//     if(name===false)
//         setPara(true)
// }

// console.log(name);

// return(

// <>

// <button onClick={next}>click</button>


// <h2>{name}</h2>

// </>


// )





//  }






//  export default App











// import { useState } from 'react'

// import './App.css'
//  function App(){

// const [ name, setPara,]=useState("")
// const [ btn, setPara2,]=useState("")
// function next(){
// setPara2  (name)

// }



// return(

// <>


// <input type="text" value={name} onChange={(e) => setPara(e.target.value)} placeholder='Enter firstname name' />



// <button onClick={next}>click</button>
// <h2>{btn}</h2>
// </>


// )





//  }






//  export default App





import { useState } from 'react'

import './App.css'
function App() {

    const [name, setPara] = useState("")
    const [btn, setPara2] = useState("")
    function next(e) {

   
        e.preventDefault();

        const reversed = name.split('').reverse().join('');
        setPara2(reversed);
        

    }



    return (

        <>
            <form onSubmit={next} >

                <input type="text" value={name} onChange={(e) => 
                setPara(e.target.value)} 
                placeholder='Enter firstname name' />


            </form>


            <h2>{btn}</h2>
        </>


    )





}






export default App




// import { useState } from 'react'
// import './App.css'

// function App() {
//     const [name, setName] = useState("");
//     const [reversedName, setReversedName] = useState("");

//     function handleChange(e) {
//         const inputValue = e.target.value;
//         setName(inputValue);
//         setReversedName(inputValue.split('').reverse().join(''));
//     }

//     return (
//         <>
//             <input 
//                 type="text" 
//                 value={name} 
//                 onChange={handleChange} 
//                 placeholder='Enter first name' 
//             />
//             <h2>{reversedName}</h2>
//         </>
//     );
// }

// export default App;






// import { useState } from 'react'

// import './App.css'
//  function App(){

// const [ name, setPara,]=useState("")
// const [ btn, setPara2,]=useState("")
// function next(){




// const reversed = name.split('').reverse().join('');
// setPara2(reversed);
// }

// function Delete(){
//   setPara("")

//   setPara2("")
// }

// return(

// <>


// <input type="text" value={name} onChange={(e) => setPara(e.target.value)} placeholder='Enter firstname name' />

// <button onClick={next} id='btn'>click</button>

// <button onClick={Delete}   id='btn2'>Delete</button>


// <h2>{btn}</h2>
// </>


// )





//  }






//  export default App