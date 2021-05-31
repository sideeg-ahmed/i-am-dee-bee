// import * as React from "react"

// // 1. import `ChakraProvider` component
// import { ChakraProvider } from "@chakra-ui/react"

// function App({ Component }) {
//   // 2. Use at the root of your app
//   return (
//     <ChakraProvider>
//       <Component />
//     </ChakraProvider>
//   )
// }

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  
    
  </React.StrictMode>,
  document.getElementById('root')
);