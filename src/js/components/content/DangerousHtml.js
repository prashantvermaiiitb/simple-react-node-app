import React from 'react';
/**
 * component to show the usage for the dangerously set inner html.
 */

const DangerHtml = ()=>{
     return (
         <div dangerouslySetInnerHTML={{__html:'<h2>this is dangerous html</h2>'}}></div>
     )
 }

 export default DangerHtml;