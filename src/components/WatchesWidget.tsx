import { useState } from 'react'
import MainFrom from './Form/MainForm'
import WatchesList from './Watches/WatchesList';
import data from './data/data'
import { v4 } from 'uuid';
import './WatchesWidget.css'

export default function WatchesWidget() {
    const [mainForm, setForm] = useState({city: '', zone: ''});
    const [watches, setWatches] = useState(data);

    const onSubmitForm = (e: any) => {
        e.preventDefault();

        const { target } = e;
        const children = [...target.children]

        const newWatches = [
            ...watches,
            {
                name: children[0].value,
                timeZone: children[1].value,
                id: v4()
            }
        ]

        setForm({city: '', zone: ''})
        setWatches(newWatches)
    }

    const onInputHandle = (e: any) => {
        const { name, value} = e.target
        
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    const onDelete = (e: any) => {
        const id = e.target.closest('li').id
        const newList = [
            watches.filter((watch) => watch.id !== id)
        ]

        setWatches(newList[0])
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <MainFrom 
                    onSubmitForm={onSubmitForm}
                    onInputHandle={onInputHandle}
                    formData={mainForm}
                />
            </div>
            
            <div className='watches-container'>
                <WatchesList 
                    watchesData={watches}
                    onDelete={onDelete}
                />
            </div>
            
        </div>
    )
}