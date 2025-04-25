"use client"

import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const SwalekhInput = dynamic(
  () => import('swalekh-react').then(mod => mod.SwalekhInput),
  { ssr: false }
);

const SwalekhTextarea = dynamic(
  () => import('swalekh-react').then(mod => mod.SwalekhTextarea),
  { ssr: false }
);


const SwalekhDiv = dynamic(
    () => import('swalekh-react').then(mod => mod.SwalekhDiv),
    { ssr: false }
  );
  
export function Form() {
    return (
        <div>
            <SwalekhInput
                id="input1"
                style={{
                    border: '2px solid #ccc',
                    padding: '8px',
                    borderRadius: '4px',
                    width: '100%',
                    margin: '10px 0',
                    backgroundColor: '#f5f5f5',
                    color: 'black'
                }}
            />
            <br />

            <br />
            <SwalekhDiv
                id="special-div"
                style={{
                    minHeight: '50px',
                    border: '1px solid #999',
                    padding: '12px',
                    width: '100%',

                    backgroundColor: '#f5f5f5',
                    color: 'black'

                }}
            />
            <SwalekhTextarea
                id="special-div"
                style={{
                    minHeight: '50px',
                    border: '1px solid #999',
                    padding: '12px',
                    width: '100%',

                    backgroundColor: '#f5f5f5',
                    color: 'black',
                    marginTop:'16px'
                }}
            />
            <br />
        </div>
    );
}
