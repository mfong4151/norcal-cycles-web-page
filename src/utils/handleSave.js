const handleSave = (e) => {

    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(e.target.innerText)
    let message;

    if(['questions', 'sales', 'service', 'parts'].includes(e.target.id)) message = 'email';
    else message = e.target.id;
    alert(`Copied to ${message} clipboard`)
  
}

export default handleSave