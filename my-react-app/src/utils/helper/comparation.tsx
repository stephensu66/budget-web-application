import React from "react";



export const compartion = ( compareRes: number | null ) => {
    if (compareRes === null) {
      return null;
    }
    const aboveAverage= compareRes > 0;

    return(
        aboveAverage ? (
            <>
                {String.fromCharCode(8593)} {Math.round(compareRes * 100)}% above average 
            </>
            ) : (
            compareRes !== 0 && (
                <>
                {String.fromCharCode(8595)} {Math.round(-compareRes * 100)}% below
                average
                </>
      
            )
 
        )
    )
  };