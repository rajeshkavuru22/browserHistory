import './index.css'

const BrowserHistory = props => {
  const {Item, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Item

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="Item">
      <p className="time">{timeAccessed}</p>
      <div className="logo-details-container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="domain-title-container">
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button
          className="delete-btn"
          type="button"
          onClick={onClickDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
