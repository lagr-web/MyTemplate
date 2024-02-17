import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    show?: boolean | undefined;
    content?: string | undefined;
    headline?: string | undefined;
    open: (mbool: boolean) => void; // Adjust types as needed
  }

const Page: React.FC<ModalProps> = (props) => {

    if (!props.show) return null;

    return (
        <>
            {createPortal(

                <>
                
                   <div className="fixed z-30 w-full h-full top-0 backdrop-blur-md" onClick={() => { props.open(false) }}></div>
                   <div className="fixed z-50 w-full top-0 h-10 text-white p-2 text-md bg-black text-end font-bold text-lg"><header>Lars Gregersen</header></div>

                    <section className="fixed z-40 w-80 md:w-96 mx-auto bg-white text-black top-40 left-1/2 transform -translate-x-1/2 rounded-lg text-sm shadow-[0px_0px_10px_0px]">
                        <div className="bg-black text-white p-1 rounded-t-lg font-bold text-lg">{props.headline}</div>
                        <article className="p-2">{props.content}</article>
                    </section>
                 
                </>
                ,
                document.body
            )}

        </>

    );

};

export default Page;
