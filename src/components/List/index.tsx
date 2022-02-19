import React from 'react';

import './List.css';

type Props = {
    initialItems: string[]
}
export const List:React.FC<Props> = ({ initialItems }) => {
    const [newItem, setNewItem] = React.useState('');
    const [list, setList] = React.useState(initialItems);

    function addToList() {
        setTimeout(() => {
            setList(state => [...state, newItem])
        }, 700);
    }

    function removeFromList(removedItem: string) {
        setTimeout(() => {
            setList(state => state.filter(item => item !== removedItem))
        }, 200)
    }

    return(
        <>
            <div className="list__header">
                <input 
                    data-testid='input_new_item'
                    placeholder='Novo item'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                <button
                    onClick={addToList}
                >
                    Adicionar
                </button>
            </div>
           
            <ul className='list__container'>
                {
                    list.map((item) => (
                        <li 
                            key={item}
                            className='list__item'
                        >
                            <button 
                                onClick={() => 
                                removeFromList(item)}
                                title="Remover"
                            >
                                &times;
                            </button>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default List;