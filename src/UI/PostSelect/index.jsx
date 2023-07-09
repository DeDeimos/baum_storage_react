import classes from "./PostSelect.module.css"

const PostSelect = ({options, defaultValue, value, onChange}) => {
    return(
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}
        className={classes.postSel}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>    
            )}
        </select>
    )
}

export {PostSelect}