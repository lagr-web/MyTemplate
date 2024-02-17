// Generated by https://quicktype.io
import Image from 'next/image'
//import { actor } from "./type/types"
import Modal from '@/components/Modal';
import { Content } from '@/type/types';

import React, { useState } from 'react';

interface Props {
    data: Content;
}

const Card = ({ data }: Props) => {

    const [showModal, setShowModal] = useState<boolean | undefined>(false);
    const [content, setContent] = useState<string | undefined>('');
    const [headline, setHeadline] = useState<string | undefined>('');

    const OpenModal = (mbool:boolean, readmore?:string, headline?:string) => {

        setContent(readmore);
        setHeadline(headline);
        setShowModal(mbool);
    }

    return (

        <>
            {data &&
                <>
                    <div className="grid-row-2 shadow-[0px_0px_5px_0px] rounded-lg bg-[#60848B]">

                        <div className="text-[white] bg-[black] p-1 rounded-t-lg grid grid-cols-2">

                            <div className='w-80 font-bold '>{data.headline}</div>

                        </div>

                        <div className="grid grid-cols-1 p-1">
                        
                            <div className="grid grid-row-2 text-sm">

                                <div className="h-20 text-white">
                                    {
                                        `${data.content.substring(0, 60)} ...`
                                    }

                                </div>

                                <div className="text-left w-20 justify-self-end">
                                    <button className="btn-read" onClick={() => { OpenModal(true, data.content, data.headline) }}>
                                        Læs mere
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal 
                      show={showModal}
                      content={content} 
                      headline={headline}
                      open={OpenModal}
                      />
                </>
            }



        </>
    )

}

export default Card;