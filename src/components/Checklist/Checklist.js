import styles from './Checklist.module.scss';

const Checklist = ({ items = [], checkable = true, onChange }) => {
  if ( !Array.isArray(items) ) {
    throw new Error(`Failed to render Checklist: Invalid items type ${typeof items}`)
  }

  return (
    <ul className={styles.checklist} data-is-checkable={checkable}>
      {items.map((item, i) => {
        const value = item?.value || item?.label;
        return (
          <li key={i}>
            <label className={styles.checklistItemLabel}>
              {checkable && (
                <input className="sronly" type="checkbox" defaultChecked={item?.checked} value={value} onChange={onChange} />
              )}
              <span>{ item?.label }</span>
            </label>
          </li>
        );
      })}
    </ul>
  )
}

export default Checklist;