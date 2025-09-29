import React, { useState } from 'react'

function Abc() {

    const [items, setitems] = useState(['ali', 'rizwan', 'umer', 'wajid'])
    const [editIndex, seteditIndex] = useState()
    const [editValue, seteditValue] = useState("")

    const handleDel = (i) => {
        console.log(i);
        const update = items.filter((item, index) => index !== i)
        console.log(update);
        setitems(update)
    }
    /// let abc = ['ali', 'rizwan', 'umer', 'wajid']
    //abc[1]="react"
    //setitems(abc)


    const handleEdit = (i) => {
        console.log(i)
        seteditIndex(i)
        seteditValue(items[i])
    }
    const handleUpdate = () => {
    }

    return (
        <div>
            {
                items.map((item, index) => (
                    <li key={index}>

                        {
                            editIndex == index ?
                                <>
                                    <input className='border' type="text"
                                        value={editValue}
                                    />
                                    <button className='border' onClick={handleUpdate}>Update</button>
                                </> :
                                <>
                                    {item}

                                    <button className='border' onClick={() => handleDel(index)}>Del</button>
                                    <button className='border' onClick={() => handleEdit(index)}>Edit</button>

                                </>
                        }
                    </li>
                ))
            }
        </div>
    )
}

export default Abc