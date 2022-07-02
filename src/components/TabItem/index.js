import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const getTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabIdClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabIdClassName}`}
        onClick={getTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
