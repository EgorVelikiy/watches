import './MainForm.css'

interface MainFormParams {
    onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void,
    onInputHandle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formData: {
        city: string,
        zone: string
    }
}

export default function MainFrom(props: MainFormParams) {
    const {onSubmitForm, onInputHandle, formData} = props

    return (
        <form className="watches-form" onSubmit={onSubmitForm}>
            <input 
                className="input city" 
                id='city' 
                name='city' 
                type='text' 
                value={formData.city} 
                onChange={onInputHandle} 
                placeholder="Введите город" 
                required/>
            <input className="input time-zone" 
                id='time' 
                name='zone' 
                type='number' 
                value={formData.zone} 
                onChange={onInputHandle} 
                placeholder="Введите временную зону" 
                required
                max={26}/>
            <button className="watches-btn" type="submit">Добавить</button>
        </form>
    )
}