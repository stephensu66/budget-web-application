import React, { createContext, useState, useContext, ReactNode } from 'react';


type ContextValue={
    result: any;
    setResult: any;
   
}
// Create a context with a default undefined value
export const ResultContext = React.createContext<ContextValue>({
    
    result: undefined,
    setResult: undefined

  });



 
